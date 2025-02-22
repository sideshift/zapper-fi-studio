import { Inject } from '@nestjs/common';
import { range } from 'lodash';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { getTokenImg } from '~app-toolkit/helpers/presentation/image.present';
import { Erc20 } from '~contract/contracts';
import { AppTokenTemplatePositionFetcher } from '~position/template/app-token.template.position-fetcher';
import {
  GetUnderlyingTokensParams,
  GetPricePerShareParams,
  GetDisplayPropsParams,
} from '~position/template/app-token.template.types';

import { GmxContractFactory } from '../contracts';

export abstract class GmxGlpTokenFetcher extends AppTokenTemplatePositionFetcher<Erc20> {
  abstract glmManagerAddress: string;
  abstract glpTokenAddress: string;
  abstract blockedTokenAddresses: string[];

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(GmxContractFactory) protected readonly contractFactory: GmxContractFactory,
  ) {
    super(appToolkit);
  }

  getContract(address: string): Erc20 {
    return this.contractFactory.erc20({ address, network: this.network });
  }

  async getAddresses() {
    return [this.glpTokenAddress];
  }

  async getUnderlyingTokenAddresses({ multicall }: GetUnderlyingTokensParams<Erc20>) {
    const glpManagerContract = this.contractFactory.gmxAumManager({
      address: this.glmManagerAddress,
      network: this.network,
    });

    const vaultAddress = await multicall.wrap(glpManagerContract).vault();
    const vault = this.contractFactory.gmxVault({ address: vaultAddress, network: this.network });

    const tokenCount = await multicall.wrap(vault).allWhitelistedTokensLength();
    const tokenRange = range(0, Number(tokenCount));
    const tokenAddresses = await Promise.all(tokenRange.map(i => multicall.wrap(vault).allWhitelistedTokens(i)));

    return tokenAddresses.filter(v => !this.blockedTokenAddresses.includes(v.toLowerCase()));
  }

  async getPricePerShare({ appToken, multicall }: GetPricePerShareParams<Erc20>) {
    const glpManagerContract = this.contractFactory.gmxAumManager({
      address: this.glmManagerAddress,
      network: this.network,
    });

    const vaultAddress = await multicall.wrap(glpManagerContract).vault();
    const vault = this.contractFactory.gmxVault({ address: vaultAddress, network: this.network });
    const reserves = await Promise.all(
      appToken.tokens.map(async token => {
        const reserveRaw = await multicall.wrap(vault).getRedemptionCollateral(token.address);
        return Number(reserveRaw) / 10 ** token.decimals;
      }),
    );

    return reserves.map(v => v / appToken.supply);
  }

  async getImages({ appToken }: GetDisplayPropsParams<Erc20>) {
    return [getTokenImg(appToken.address, this.network)];
  }
}

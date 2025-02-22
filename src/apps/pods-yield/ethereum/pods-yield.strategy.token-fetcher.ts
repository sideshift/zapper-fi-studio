import { Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { AppTokenTemplatePositionFetcher } from '~position/template/app-token.template.position-fetcher';
import {
  GetDataPropsParams,
  GetDisplayPropsParams,
  GetPricePerShareParams,
  GetUnderlyingTokensParams,
} from '~position/template/app-token.template.types';

import { PodsYieldContractFactory, PodsYieldVault } from '../contracts';

import { strategyAddresses, strategyDetails } from './config';

@PositionTemplate()
export class EthereumPodsYieldStrategyTokenFetcher extends AppTokenTemplatePositionFetcher<PodsYieldVault> {
  groupLabel = 'Strategies';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(PodsYieldContractFactory) protected readonly contractFactory: PodsYieldContractFactory,
  ) {
    super(appToolkit);
  }

  getContract(address: string) {
    return this.contractFactory.podsYieldVault({ address, network: this.network });
  }

  async getAddresses() {
    return strategyAddresses;
  }

  async getUnderlyingTokenAddresses({ contract }: GetUnderlyingTokensParams<PodsYieldVault>) {
    return contract.asset();
  }

  async getPricePerShare({ contract, appToken }: GetPricePerShareParams<PodsYieldVault>) {
    const [assetsRaw, supplyRaw] = await Promise.all([contract.totalAssets(), contract.totalSupply()]);
    const supply = Number(supplyRaw) / 10 ** appToken.decimals;
    const assets = Number(assetsRaw) / 10 ** appToken.tokens[0].decimals;

    const pricePerShare = assets / supply;
    return [pricePerShare];
  }

  async getLiquidity({ appToken }: GetDataPropsParams<PodsYieldVault>) {
    return appToken.supply * appToken.price;
  }

  async getReserves({ appToken }: GetDataPropsParams<PodsYieldVault>) {
    return [appToken.pricePerShare[0] * appToken.supply];
  }

  async getApy() {
    return 0;
  }

  async getLabel({ appToken }: GetDisplayPropsParams<PodsYieldVault>) {
    const details = strategyDetails[appToken.address] || strategyDetails.standard;
    return details.title;
  }
}

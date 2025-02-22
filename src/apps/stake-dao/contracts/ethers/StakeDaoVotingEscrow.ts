/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface StakeDaoVotingEscrowInterface extends utils.Interface {
  functions: {
    'initialize(address,address,address,string,string)': FunctionFragment;
    'commit_transfer_ownership(address)': FunctionFragment;
    'accept_transfer_ownership()': FunctionFragment;
    'apply_transfer_ownership()': FunctionFragment;
    'commit_smart_wallet_checker(address)': FunctionFragment;
    'apply_smart_wallet_checker()': FunctionFragment;
    'get_last_user_slope(address)': FunctionFragment;
    'user_point_history__ts(address,uint256)': FunctionFragment;
    'locked__end(address)': FunctionFragment;
    'checkpoint()': FunctionFragment;
    'deposit_for(address,uint256)': FunctionFragment;
    'deposit_for_from(address,uint256)': FunctionFragment;
    'create_lock(uint256,uint256)': FunctionFragment;
    'increase_amount(uint256)': FunctionFragment;
    'increase_unlock_time(uint256)': FunctionFragment;
    'withdraw()': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'balanceOf(address,uint256)': FunctionFragment;
    'balanceOfAt(address,uint256)': FunctionFragment;
    'getPastVotes(address,uint256)': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'totalSupply(uint256)': FunctionFragment;
    'totalSupplyAt(uint256)': FunctionFragment;
    'token()': FunctionFragment;
    'supply()': FunctionFragment;
    'locked(address)': FunctionFragment;
    'epoch()': FunctionFragment;
    'point_history(uint256)': FunctionFragment;
    'user_point_history(address,uint256)': FunctionFragment;
    'user_point_epoch(address)': FunctionFragment;
    'slope_changes(uint256)': FunctionFragment;
    'name()': FunctionFragment;
    'symbol()': FunctionFragment;
    'decimals()': FunctionFragment;
    'future_smart_wallet_checker()': FunctionFragment;
    'smart_wallet_checker()': FunctionFragment;
    'admin()': FunctionFragment;
    'future_admin()': FunctionFragment;
    'initialized()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'initialize'
      | 'commit_transfer_ownership'
      | 'accept_transfer_ownership'
      | 'apply_transfer_ownership'
      | 'commit_smart_wallet_checker'
      | 'apply_smart_wallet_checker'
      | 'get_last_user_slope'
      | 'user_point_history__ts'
      | 'locked__end'
      | 'checkpoint'
      | 'deposit_for'
      | 'deposit_for_from'
      | 'create_lock'
      | 'increase_amount'
      | 'increase_unlock_time'
      | 'withdraw'
      | 'balanceOf(address)'
      | 'balanceOf(address,uint256)'
      | 'balanceOfAt'
      | 'getPastVotes'
      | 'totalSupply()'
      | 'totalSupply(uint256)'
      | 'totalSupplyAt'
      | 'token'
      | 'supply'
      | 'locked'
      | 'epoch'
      | 'point_history'
      | 'user_point_history'
      | 'user_point_epoch'
      | 'slope_changes'
      | 'name'
      | 'symbol'
      | 'decimals'
      | 'future_smart_wallet_checker'
      | 'smart_wallet_checker'
      | 'admin'
      | 'future_admin'
      | 'initialized',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'initialize',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'commit_transfer_ownership', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'accept_transfer_ownership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'apply_transfer_ownership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'commit_smart_wallet_checker', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'apply_smart_wallet_checker', values?: undefined): string;
  encodeFunctionData(functionFragment: 'get_last_user_slope', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'user_point_history__ts',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'locked__end', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'checkpoint', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'deposit_for',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'deposit_for_from',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'create_lock',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'increase_amount', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'increase_unlock_time', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'withdraw', values?: undefined): string;
  encodeFunctionData(functionFragment: 'balanceOf(address)', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'balanceOf(address,uint256)',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'balanceOfAt',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getPastVotes',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'totalSupply()', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply(uint256)', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'totalSupplyAt', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'token', values?: undefined): string;
  encodeFunctionData(functionFragment: 'supply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'locked', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'epoch', values?: undefined): string;
  encodeFunctionData(functionFragment: 'point_history', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'user_point_history',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'user_point_epoch', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'slope_changes', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(functionFragment: 'future_smart_wallet_checker', values?: undefined): string;
  encodeFunctionData(functionFragment: 'smart_wallet_checker', values?: undefined): string;
  encodeFunctionData(functionFragment: 'admin', values?: undefined): string;
  encodeFunctionData(functionFragment: 'future_admin', values?: undefined): string;
  encodeFunctionData(functionFragment: 'initialized', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'commit_transfer_ownership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'accept_transfer_ownership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'apply_transfer_ownership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'commit_smart_wallet_checker', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'apply_smart_wallet_checker', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'get_last_user_slope', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'user_point_history__ts', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'locked__end', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'checkpoint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit_for', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit_for_from', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'create_lock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'increase_amount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'increase_unlock_time', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf(address)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf(address,uint256)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOfAt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPastVotes', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply()', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply(uint256)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupplyAt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'token', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'supply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'locked', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'epoch', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'point_history', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'user_point_history', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'user_point_epoch', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'slope_changes', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'future_smart_wallet_checker', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'smart_wallet_checker', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'admin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'future_admin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialized', data: BytesLike): Result;

  events: {
    'CommitOwnership(address)': EventFragment;
    'ApplyOwnership(address)': EventFragment;
    'Deposit(address,uint256,uint256,int128,uint256)': EventFragment;
    'Withdraw(address,uint256,uint256)': EventFragment;
    'Supply(uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CommitOwnership'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ApplyOwnership'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Deposit'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdraw'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Supply'): EventFragment;
}

export interface CommitOwnershipEventObject {
  admin: string;
}
export type CommitOwnershipEvent = TypedEvent<[string], CommitOwnershipEventObject>;

export type CommitOwnershipEventFilter = TypedEventFilter<CommitOwnershipEvent>;

export interface ApplyOwnershipEventObject {
  admin: string;
}
export type ApplyOwnershipEvent = TypedEvent<[string], ApplyOwnershipEventObject>;

export type ApplyOwnershipEventFilter = TypedEventFilter<ApplyOwnershipEvent>;

export interface DepositEventObject {
  provider: string;
  value: BigNumber;
  locktime: BigNumber;
  type: BigNumber;
  ts: BigNumber;
}
export type DepositEvent = TypedEvent<[string, BigNumber, BigNumber, BigNumber, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface WithdrawEventObject {
  provider: string;
  value: BigNumber;
  ts: BigNumber;
}
export type WithdrawEvent = TypedEvent<[string, BigNumber, BigNumber], WithdrawEventObject>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface SupplyEventObject {
  prevSupply: BigNumber;
  supply: BigNumber;
}
export type SupplyEvent = TypedEvent<[BigNumber, BigNumber], SupplyEventObject>;

export type SupplyEventFilter = TypedEventFilter<SupplyEvent>;

export interface StakeDaoVotingEscrow extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StakeDaoVotingEscrowInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    initialize(
      _admin: PromiseOrValue<string>,
      token_addr: PromiseOrValue<string>,
      _smart_wallet_checker: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    commit_transfer_ownership(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    accept_transfer_ownership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    apply_transfer_ownership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    commit_smart_wallet_checker(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    apply_smart_wallet_checker(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    get_last_user_slope(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    user_point_history__ts(
      _addr: PromiseOrValue<string>,
      _idx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    locked__end(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    checkpoint(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    deposit_for(
      _addr: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    deposit_for_from(
      _addr: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    create_lock(
      _value: PromiseOrValue<BigNumberish>,
      _unlock_time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    increase_amount(
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    increase_unlock_time(
      _unlock_time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    'balanceOf(address)'(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    'balanceOf(address,uint256)'(
      addr: PromiseOrValue<string>,
      _t: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    balanceOfAt(
      addr: PromiseOrValue<string>,
      _block: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    getPastVotes(
      addr: PromiseOrValue<string>,
      _block: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    'totalSupply()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    'totalSupply(uint256)'(t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupplyAt(_block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    supply(overrides?: CallOverrides): Promise<[BigNumber]>;

    locked(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; end: BigNumber }>;

    epoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    point_history(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        bias: BigNumber;
        slope: BigNumber;
        ts: BigNumber;
        blk: BigNumber;
      }
    >;

    user_point_history(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        bias: BigNumber;
        slope: BigNumber;
        ts: BigNumber;
        blk: BigNumber;
      }
    >;

    user_point_epoch(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    slope_changes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    decimals(overrides?: CallOverrides): Promise<[BigNumber]>;

    future_smart_wallet_checker(overrides?: CallOverrides): Promise<[string]>;

    smart_wallet_checker(overrides?: CallOverrides): Promise<[string]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    future_admin(overrides?: CallOverrides): Promise<[string]>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;
  };

  initialize(
    _admin: PromiseOrValue<string>,
    token_addr: PromiseOrValue<string>,
    _smart_wallet_checker: PromiseOrValue<string>,
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  commit_transfer_ownership(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  accept_transfer_ownership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  apply_transfer_ownership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  commit_smart_wallet_checker(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  apply_smart_wallet_checker(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  get_last_user_slope(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  user_point_history__ts(
    _addr: PromiseOrValue<string>,
    _idx: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  locked__end(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  checkpoint(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  deposit_for(
    _addr: PromiseOrValue<string>,
    _value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  deposit_for_from(
    _addr: PromiseOrValue<string>,
    _value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  create_lock(
    _value: PromiseOrValue<BigNumberish>,
    _unlock_time: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  increase_amount(
    _value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  increase_unlock_time(
    _unlock_time: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  'balanceOf(address)'(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  'balanceOf(address,uint256)'(
    addr: PromiseOrValue<string>,
    _t: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  balanceOfAt(
    addr: PromiseOrValue<string>,
    _block: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getPastVotes(
    addr: PromiseOrValue<string>,
    _block: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

  'totalSupply(uint256)'(t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

  totalSupplyAt(_block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  supply(overrides?: CallOverrides): Promise<BigNumber>;

  locked(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; end: BigNumber }>;

  epoch(overrides?: CallOverrides): Promise<BigNumber>;

  point_history(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      bias: BigNumber;
      slope: BigNumber;
      ts: BigNumber;
      blk: BigNumber;
    }
  >;

  user_point_history(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      bias: BigNumber;
      slope: BigNumber;
      ts: BigNumber;
      blk: BigNumber;
    }
  >;

  user_point_epoch(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  slope_changes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  symbol(overrides?: CallOverrides): Promise<string>;

  decimals(overrides?: CallOverrides): Promise<BigNumber>;

  future_smart_wallet_checker(overrides?: CallOverrides): Promise<string>;

  smart_wallet_checker(overrides?: CallOverrides): Promise<string>;

  admin(overrides?: CallOverrides): Promise<string>;

  future_admin(overrides?: CallOverrides): Promise<string>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    initialize(
      _admin: PromiseOrValue<string>,
      token_addr: PromiseOrValue<string>,
      _smart_wallet_checker: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    commit_transfer_ownership(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    accept_transfer_ownership(overrides?: CallOverrides): Promise<void>;

    apply_transfer_ownership(overrides?: CallOverrides): Promise<void>;

    commit_smart_wallet_checker(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    apply_smart_wallet_checker(overrides?: CallOverrides): Promise<void>;

    get_last_user_slope(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    user_point_history__ts(
      _addr: PromiseOrValue<string>,
      _idx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    locked__end(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    checkpoint(overrides?: CallOverrides): Promise<void>;

    deposit_for(
      _addr: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    deposit_for_from(
      _addr: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    create_lock(
      _value: PromiseOrValue<BigNumberish>,
      _unlock_time: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    increase_amount(_value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    increase_unlock_time(_unlock_time: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    withdraw(overrides?: CallOverrides): Promise<void>;

    'balanceOf(address)'(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    'balanceOf(address,uint256)'(
      addr: PromiseOrValue<string>,
      _t: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    balanceOfAt(
      addr: PromiseOrValue<string>,
      _block: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getPastVotes(
      addr: PromiseOrValue<string>,
      _block: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

    'totalSupply(uint256)'(t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    totalSupplyAt(_block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    supply(overrides?: CallOverrides): Promise<BigNumber>;

    locked(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; end: BigNumber }>;

    epoch(overrides?: CallOverrides): Promise<BigNumber>;

    point_history(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        bias: BigNumber;
        slope: BigNumber;
        ts: BigNumber;
        blk: BigNumber;
      }
    >;

    user_point_history(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        bias: BigNumber;
        slope: BigNumber;
        ts: BigNumber;
        blk: BigNumber;
      }
    >;

    user_point_epoch(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    slope_changes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    symbol(overrides?: CallOverrides): Promise<string>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    future_smart_wallet_checker(overrides?: CallOverrides): Promise<string>;

    smart_wallet_checker(overrides?: CallOverrides): Promise<string>;

    admin(overrides?: CallOverrides): Promise<string>;

    future_admin(overrides?: CallOverrides): Promise<string>;

    initialized(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    'CommitOwnership(address)'(admin?: null): CommitOwnershipEventFilter;
    CommitOwnership(admin?: null): CommitOwnershipEventFilter;

    'ApplyOwnership(address)'(admin?: null): ApplyOwnershipEventFilter;
    ApplyOwnership(admin?: null): ApplyOwnershipEventFilter;

    'Deposit(address,uint256,uint256,int128,uint256)'(
      provider?: PromiseOrValue<string> | null,
      value?: null,
      locktime?: PromiseOrValue<BigNumberish> | null,
      type?: null,
      ts?: null,
    ): DepositEventFilter;
    Deposit(
      provider?: PromiseOrValue<string> | null,
      value?: null,
      locktime?: PromiseOrValue<BigNumberish> | null,
      type?: null,
      ts?: null,
    ): DepositEventFilter;

    'Withdraw(address,uint256,uint256)'(
      provider?: PromiseOrValue<string> | null,
      value?: null,
      ts?: null,
    ): WithdrawEventFilter;
    Withdraw(provider?: PromiseOrValue<string> | null, value?: null, ts?: null): WithdrawEventFilter;

    'Supply(uint256,uint256)'(prevSupply?: null, supply?: null): SupplyEventFilter;
    Supply(prevSupply?: null, supply?: null): SupplyEventFilter;
  };

  estimateGas: {
    initialize(
      _admin: PromiseOrValue<string>,
      token_addr: PromiseOrValue<string>,
      _smart_wallet_checker: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    commit_transfer_ownership(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    accept_transfer_ownership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    apply_transfer_ownership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    commit_smart_wallet_checker(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    apply_smart_wallet_checker(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    get_last_user_slope(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    user_point_history__ts(
      _addr: PromiseOrValue<string>,
      _idx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    locked__end(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    checkpoint(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    deposit_for(
      _addr: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    deposit_for_from(
      _addr: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    create_lock(
      _value: PromiseOrValue<BigNumberish>,
      _unlock_time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    increase_amount(
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    increase_unlock_time(
      _unlock_time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    'balanceOf(address)'(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    'balanceOf(address,uint256)'(
      addr: PromiseOrValue<string>,
      _t: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    balanceOfAt(
      addr: PromiseOrValue<string>,
      _block: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getPastVotes(
      addr: PromiseOrValue<string>,
      _block: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

    'totalSupply(uint256)'(t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    totalSupplyAt(_block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    supply(overrides?: CallOverrides): Promise<BigNumber>;

    locked(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    epoch(overrides?: CallOverrides): Promise<BigNumber>;

    point_history(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    user_point_history(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    user_point_epoch(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    slope_changes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    future_smart_wallet_checker(overrides?: CallOverrides): Promise<BigNumber>;

    smart_wallet_checker(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    future_admin(overrides?: CallOverrides): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      _admin: PromiseOrValue<string>,
      token_addr: PromiseOrValue<string>,
      _smart_wallet_checker: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    commit_transfer_ownership(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    accept_transfer_ownership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    apply_transfer_ownership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    commit_smart_wallet_checker(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    apply_smart_wallet_checker(
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    get_last_user_slope(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    user_point_history__ts(
      _addr: PromiseOrValue<string>,
      _idx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    locked__end(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    checkpoint(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    deposit_for(
      _addr: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    deposit_for_from(
      _addr: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    create_lock(
      _value: PromiseOrValue<BigNumberish>,
      _unlock_time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    increase_amount(
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    increase_unlock_time(
      _unlock_time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    withdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    'balanceOf(address)'(addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'balanceOf(address,uint256)'(
      addr: PromiseOrValue<string>,
      _t: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    balanceOfAt(
      addr: PromiseOrValue<string>,
      _block: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getPastVotes(
      addr: PromiseOrValue<string>,
      _block: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'totalSupply()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'totalSupply(uint256)'(t: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupplyAt(_block: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    locked(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    epoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    point_history(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    user_point_history(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    user_point_epoch(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    slope_changes(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    future_smart_wallet_checker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    smart_wallet_checker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    future_admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

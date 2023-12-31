/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface MeowlRouterInterface extends utils.Interface {
  functions: {
    "recover(address)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "recover"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "recover",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "recover", data: BytesLike): Result;

  events: {
    "Swap(address,address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
}

export interface SwapEventObject {
  tokenIn: string;
  tokenOut: string;
  actualAmountIn: BigNumber;
  actualAmountOut: BigNumber;
  feeAmount: BigNumber;
}
export type SwapEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber],
  SwapEventObject
>;

export type SwapEventFilter = TypedEventFilter<SwapEvent>;

export interface MeowlRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MeowlRouterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    recover(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  recover(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    recover(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Swap(address,address,uint256,uint256,uint256)"(
      tokenIn?: null,
      tokenOut?: null,
      actualAmountIn?: null,
      actualAmountOut?: null,
      feeAmount?: null
    ): SwapEventFilter;
    Swap(
      tokenIn?: null,
      tokenOut?: null,
      actualAmountIn?: null,
      actualAmountOut?: null,
      feeAmount?: null
    ): SwapEventFilter;
  };

  estimateGas: {
    recover(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    recover(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

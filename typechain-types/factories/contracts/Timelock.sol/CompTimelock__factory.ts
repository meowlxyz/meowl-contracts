/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CompTimelock,
  CompTimelockInterface,
} from "../../../contracts/Timelock.sol/CompTimelock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "CancelTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "NewDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "QueueTransaction",
    type: "event",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAXIMUM_DELAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_DELAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "cancelTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "queuedTransactions",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    name: "setDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pendingAdmin_",
        type: "address",
      },
    ],
    name: "setPendingAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60803461007a57601f610d9338819003918201601f19168301916001600160401b0383118484101761007f5780849260209460405283398101031261007a57516001600160a01b0381169081900361007a57600080546001600160a01b031916919091179055610e10600255604051610cfd90816100968239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60406080815260049081361015610020575b5050361561001e57600080fd5b005b600091823560e01c9081630825f38f146107975781630e18b681146106c157816326782247146106985781633a66f901146104f25781634dd18bf51461041b578163591fcdfe1461030e5781636a42b8f8146102ef5781637d645fab146102d1578163b1b43ae5146102b4578163c1a287e214610296578163e177246e14610113578163f2b06537146100e2575063f851a4400361001157346100de57816003193601126100de57905490516001600160a01b039091168152602090f35b5080fd5b90503461010f57602036600319011261010f578160209360ff923581526003855220541690519015158152f35b8280fd5b90503461010f57602036600319011261010f5780359130330361023957610e1083106101d9576202a3008311610170575050806002557f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c8280a280f35b906020608492519162461bcd60e51b8352820152603860248201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e60448201527f6f7420657863656564206d6178696d756d2064656c61792e00000000000000006064820152fd5b906020608492519162461bcd60e51b8352820152603460248201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d75737420656044820152733c31b2b2b21036b4b734b6bab6903232b630bc9760611b6064820152fd5b906020608492519162461bcd60e51b8352820152603160248201527f54696d656c6f636b3a3a73657444656c61793a2043616c6c206d75737420636f60448201527036b290333937b6902a34b6b2b637b1b59760791b6064820152fd5b5050346100de57816003193601126100de5760209051621275008152f35b5050346100de57816003193601126100de5760209051610e108152f35b5050346100de57816003193601126100de57602090516202a3008152f35b5050346100de57816003193601126100de576020906002549051908152f35b9190503461010f5761031f36610b6a565b875493966001600160a01b039594919391861633036103b25750916103ac917f2fffc091a501fd91bfbff27141450d3acb40fb8e6d8382b243ec7a812a3aaf879594938888516103898161037b87878760208501978d89610c37565b03601f198101835282610ada565b51902097888b526003602052808b2060ff19815416905551958695169885610c79565b0390a380f35b608490602088519162461bcd60e51b8352820152603760248201527f54696d656c6f636b3a3a63616e63656c5472616e73616374696f6e3a2043616c60448201527f6c206d75737420636f6d652066726f6d2061646d696e2e0000000000000000006064820152fd5b90503461010f57602036600319011261010f5780356001600160a01b03811692908390036104ee57303303610485575050600180546001600160a01b031916821790557f69d78e38a01985fbb1462961809b4b2d65531bc93b2b94037f3334b82ca4a7568280a280f35b906020608492519162461bcd60e51b8352820152603860248201527f54696d656c6f636b3a3a73657450656e64696e6741646d696e3a2043616c6c2060448201527f6d75737420636f6d652066726f6d2054696d656c6f636b2e00000000000000006064820152fd5b8380fd5b905082346106955761050336610b6a565b855493966001600160a01b039594919391861633036106335760025442018042116106205784106105a557602089808a8a7f76e2796dc3a81d57b0e8504b647febcbeeb5f4af818e164f11eef8131a6a763f8b8b61059c8c8c8c888a51610576818f87878761037b938501978d89610c37565b5190209a888c809a5260038e5220600160ff198254161790558951958695169885610c79565b0390a351908152f35b60a49060208a519162461bcd60e51b8352820152604960248201527f54696d656c6f636b3a3a71756575655472616e73616374696f6e3a204573746960448201527f6d6174656420657865637574696f6e20626c6f636b206d757374207361746973606482015268333c903232b630bc9760b91b6084820152fd5b634e487b7160e01b885260118252602488fd5b60849060208a519162461bcd60e51b8352820152603660248201527f54696d656c6f636b3a3a71756575655472616e73616374696f6e3a2043616c6c6044820152751036bab9ba1031b7b6b290333937b69030b236b4b71760511b6064820152fd5b80fd5b5050346100de57816003193601126100de5760015490516001600160a01b039091168152602090f35b90503461010f578260031936011261010f57600154916001600160a01b038316330361072e5750506bffffffffffffffffffffffff60a01b90338284541617835516600155337f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c8280a280f35b906020608492519162461bcd60e51b8352820152603860248201527f54696d656c6f636b3a3a61636365707441646d696e3a2043616c6c206d75737460448201527f20636f6d652066726f6d2070656e64696e6741646d696e2e00000000000000006064820152fd5b8391506107a336610b6a565b86546001600160a01b039893969395929089163303610a7157855196602097888101906107d88161037b8787878d8c89610c37565b51902094858a526003895260ff888b20541615610a1a578342106109b5576212750084018085116109a257421161095557858a5260038952878a20805460ff1916905581518a908a8161091157505080845b8b815191018a895af13d15610908573d61084381610b12565b906108508b519283610ada565b8152809b8b3d92013e5b156108b157506108ad979899927fa560e3198060a2f10670c1ec5b403077ea6ae93ca8de1c32b451dc1a943cd6e7949261089b928951958695169885610c79565b0390a351928284938452830190610c12565b0390f35b875162461bcd60e51b8152908101899052603d6024820152600080516020610ca883398151915260448201527f616e73616374696f6e20657865637574696f6e2072657665727465642e0000006064820152608490fd5b60609a5061085a565b6109506024849363ffffffff60e01b9084890120168d51938491818301526109418a518092858501908d01610bef565b81010386810184520182610ada565b61082a565b875162461bcd60e51b815290810189905260336024820152600080516020610ca883398151915260448201527230b739b0b1ba34b7b71034b99039ba30b6329760691b6064820152608490fd5b634e487b7160e01b8b526011825260248bfd5b875162461bcd60e51b815290810189905260456024820152600080516020610ca883398151915260448201527f616e73616374696f6e206861736e2774207375727061737365642074696d65206064820152643637b1b59760d91b608482015260a490fd5b875162461bcd60e51b8152908101899052603d6024820152600080516020610ca883398151915260448201527f616e73616374696f6e206861736e2774206265656e207175657565642e0000006064820152608490fd5b855162461bcd60e51b8152602081860152603860248201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20436160448201527f6c6c206d75737420636f6d652066726f6d2061646d696e2e00000000000000006064820152608490fd5b90601f8019910116810190811067ffffffffffffffff821117610afc57604052565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff8111610afc57601f01601f191660200190565b929192610b3a82610b12565b91610b486040519384610ada565b829481845281830111610b65578281602093846000960137010152565b600080fd5b9060a0600319830112610b65576004356001600160a01b0381168103610b6557916024359167ffffffffffffffff604435818111610b655783602382011215610b655783816024610bc093600401359101610b2e565b92606435918211610b655780602383011215610b6557816024610be893600401359101610b2e565b9060843590565b60005b838110610c025750506000910152565b8181015183820152602001610bf2565b90602091610c2b81518092818552858086019101610bef565b601f01601f1916010190565b95949390608093610c7493610c669260018060a01b03168952602089015260a0604089015260a0880190610c12565b908682036060880152610c12565b930152565b949392610c99606093610c74938852608060208901526080880190610c12565b908682036040880152610c1256fe54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472a264697066735822122094c4560304d1e0519f9075ea0b2cc24000611f16a028fb24ab9b09a7546098fc64736f6c63430008130033";

type CompTimelockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CompTimelockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CompTimelock__factory extends ContractFactory {
  constructor(...args: CompTimelockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    admin_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CompTimelock> {
    return super.deploy(admin_, overrides || {}) as Promise<CompTimelock>;
  }
  override getDeployTransaction(
    admin_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(admin_, overrides || {});
  }
  override attach(address: string): CompTimelock {
    return super.attach(address) as CompTimelock;
  }
  override connect(signer: Signer): CompTimelock__factory {
    return super.connect(signer) as CompTimelock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CompTimelockInterface {
    return new utils.Interface(_abi) as CompTimelockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CompTimelock {
    return new Contract(address, _abi, signerOrProvider) as CompTimelock;
  }
}

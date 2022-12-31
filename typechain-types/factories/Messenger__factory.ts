/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BigNumberish,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Messenger, MessengerInterface } from "../Messenger";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numOfPendingLimits",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "reciever",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "MessageConfirmed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositInWei",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "text",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isPending",
        type: "bool",
      },
    ],
    name: "NewMessage",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "limits",
        type: "uint256",
      },
    ],
    name: "NumOfPendingLimitsChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "accept",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_limits",
        type: "uint256",
      },
    ],
    name: "changeNumOfPendingLimits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "deny",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwnMessages",
    outputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "depositInWei",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "text",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isPending",
            type: "bool",
          },
        ],
        internalType: "struct Messenger.Message[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numOfPendingLimits",
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
    name: "owner",
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
        internalType: "string",
        name: "_text",
        type: "string",
      },
      {
        internalType: "address payable",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "post",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260405162001faa38038062001faa8339818101604052810190620000299190620001e0565b620000746040518060400160405280602081526020017f48657265206973206d7920666972737420736d61727420636f6e7472616374218152506200009260201b62000bf11760201c565b620000846200013560201b60201c565b8060018190555050620002d0565b6200013281604051602401620000a99190620002ac565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200017760201b60201c565b50565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600080fd5b6000819050919050565b620001ba81620001a5565b8114620001c657600080fd5b50565b600081519050620001da81620001af565b92915050565b600060208284031215620001f957620001f8620001a0565b5b60006200020984828501620001c9565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156200024e57808201518184015260208101905062000231565b60008484015250505050565b6000601f19601f8301169050919050565b6000620002788262000212565b6200028481856200021d565b9350620002968185602086016200022e565b620002a1816200025a565b840191505092915050565b60006020820190508181036000830152620002c881846200026b565b905092915050565b611cca80620002e06000396000f3fe6080604052600436106100705760003560e01c806356f662821161004e57806356f66282146100e5578063837106bb146101015780638da5cb5b1461012a578063acdb8efd1461015557610070565b806313e262711461007557806319b05f491461009157806339869bc3146100ba575b600080fd5b61008f600480360381019061008a919061112c565b610180565b005b34801561009d57600080fd5b506100b860048036038101906100b391906111be565b61047f565b005b3480156100c657600080fd5b506100cf6106b6565b6040516100dc91906111fa565b60405180910390f35b6100ff60048036038101906100fa91906111be565b6106bc565b005b34801561010d57600080fd5b50610128600480360381019061012391906111be565b6108f3565b005b34801561013657600080fd5b5061013f6109c4565b60405161014c9190611236565b60405180910390f35b34801561016157600080fd5b5061016a6109e8565b6040516101779190611454565b60405180910390f35b600154600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410610203576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101fa906114f9565b60405180910390fd5b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102539190611548565b9250508190555061029b6040518060400160405280601f81526020017f257320706f73747320746578743a205b25735d20746f6b656e3a205b25645d00815250338434610c8a565b600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16815260200134815260200142815260200184815260200160011515815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003015560808201518160040190816104169190611788565b5060a08201518160050160006101000a81548160ff02191690831515021790555050507f6b8f49facd5e00a27899ac1ac6cd3edeb40299f83f03eac03a0c04e7a905909633823442866001604051610473969594939291906118f7565b60405180910390a15050565b61048881610d2c565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106104db576104da61195f565b5b90600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015481526020016004820180546105c4906115ab565b80601f01602080910402602001604051908101604052809291908181526020018280546105f0906115ab565b801561063d5780601f106106125761010080835404028352916020019161063d565b820191906000526020600020905b81548152906001019060200180831161062057829003601f168201915b505050505081526020016005820160009054906101000a900460ff161515151581525050905061067581602001518260400151610e9a565b7f2657c0f1a183b8a175f4cf6c3f6d7764c7265155fc9635682baad3cedd67d2878160200151836040516106aa92919061198e565b60405180910390a15050565b60015481565b6106c581610d2c565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106107185761071761195f565b5b90600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482018054610801906115ab565b80601f016020809104026020016040519081016040528092919081815260200182805461082d906115ab565b801561087a5780601f1061084f5761010080835404028352916020019161087a565b820191906000526020600020905b81548152906001019060200180831161085d57829003601f168201915b505050505081526020016005820160009054906101000a900460ff16151515158152505090506108b281600001518260400151610e9a565b7f2657c0f1a183b8a175f4cf6c3f6d7764c7265155fc9635682baad3cedd67d2878160200151836040516108e792919061198e565b60405180910390a15050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610981576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097890611a03565b60405180910390fd5b806001819055507ff4add848113971c4866581c1df1951b8665a05140021ce0d344d1e823b8133c86001546040516109b991906111fa565b60405180910390a150565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610be857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482018054610b3c906115ab565b80601f0160208091040260200160405190810160405280929190818152602001828054610b68906115ab565b8015610bb55780601f10610b8a57610100808354040283529160200191610bb5565b820191906000526020600020905b815481529060010190602001808311610b9857829003601f168201915b505050505081526020016005820160009054906101000a900460ff16151515158152505081526020019060010190610a49565b50505050905090565b610c8781604051602401610c059190611a23565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610f4b565b50565b610d2684848484604051602401610ca49493929190611a45565b6040516020818303038152906040527f91d1112e000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610f4b565b50505050565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610d7f57610d7e61195f565b5b906000526020600020906006020190508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e21576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1890611b0a565b60405180910390fd5b600115158160050160009054906101000a900460ff16151514610e79576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7090611b9c565b60405180910390fd5b60008160050160006101000a81548160ff0219169083151502179055505050565b60008273ffffffffffffffffffffffffffffffffffffffff1682604051610ec090611bed565b60006040518083038185875af1925050503d8060008114610efd576040519150601f19603f3d011682016040523d82523d6000602084013e610f02565b606091505b5050905080610f46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3d90611c74565b60405180910390fd5b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610fdb82610f92565b810181811067ffffffffffffffff82111715610ffa57610ff9610fa3565b5b80604052505050565b600061100d610f74565b90506110198282610fd2565b919050565b600067ffffffffffffffff82111561103957611038610fa3565b5b61104282610f92565b9050602081019050919050565b82818337600083830152505050565b600061107161106c8461101e565b611003565b90508281526020810184848401111561108d5761108c610f8d565b5b61109884828561104f565b509392505050565b600082601f8301126110b5576110b4610f88565b5b81356110c584826020860161105e565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006110f9826110ce565b9050919050565b611109816110ee565b811461111457600080fd5b50565b60008135905061112681611100565b92915050565b6000806040838503121561114357611142610f7e565b5b600083013567ffffffffffffffff81111561116157611160610f83565b5b61116d858286016110a0565b925050602061117e85828601611117565b9150509250929050565b6000819050919050565b61119b81611188565b81146111a657600080fd5b50565b6000813590506111b881611192565b92915050565b6000602082840312156111d4576111d3610f7e565b5b60006111e2848285016111a9565b91505092915050565b6111f481611188565b82525050565b600060208201905061120f60008301846111eb565b92915050565b6000611220826110ce565b9050919050565b61123081611215565b82525050565b600060208201905061124b6000830184611227565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611286816110ee565b82525050565b61129581611188565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156112d55780820151818401526020810190506112ba565b60008484015250505050565b60006112ec8261129b565b6112f681856112a6565b93506113068185602086016112b7565b61130f81610f92565b840191505092915050565b60008115159050919050565b61132f8161131a565b82525050565b600060c08301600083015161134d600086018261127d565b506020830151611360602086018261127d565b506040830151611373604086018261128c565b506060830151611386606086018261128c565b506080830151848203608086015261139e82826112e1565b91505060a08301516113b360a0860182611326565b508091505092915050565b60006113ca8383611335565b905092915050565b6000602082019050919050565b60006113ea82611251565b6113f4818561125c565b9350836020820285016114068561126d565b8060005b85811015611442578484038952815161142385826113be565b945061142e836113d2565b925060208a0199505060018101905061140a565b50829750879550505050505092915050565b6000602082019050818103600083015261146e81846113df565b905092915050565b600082825260208201905092915050565b7f54686520726563656976657220686173207265616368656420746865206e756d60008201527f626572206f662070656e64696e67206c696d6974730000000000000000000000602082015250565b60006114e3603583611476565b91506114ee82611487565b604082019050919050565b60006020820190508181036000830152611512816114d6565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061155382611188565b915061155e83611188565b925082820190508082111561157657611575611519565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806115c357607f821691505b6020821081036115d6576115d561157c565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261163e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611601565b6116488683611601565b95508019841693508086168417925050509392505050565b6000819050919050565b600061168561168061167b84611188565b611660565b611188565b9050919050565b6000819050919050565b61169f8361166a565b6116b36116ab8261168c565b84845461160e565b825550505050565b600090565b6116c86116bb565b6116d3818484611696565b505050565b5b818110156116f7576116ec6000826116c0565b6001810190506116d9565b5050565b601f82111561173c5761170d816115dc565b611716846115f1565b81016020851015611725578190505b611739611731856115f1565b8301826116d8565b50505b505050565b600082821c905092915050565b600061175f60001984600802611741565b1980831691505092915050565b6000611778838361174e565b9150826002028217905092915050565b6117918261129b565b67ffffffffffffffff8111156117aa576117a9610fa3565b5b6117b482546115ab565b6117bf8282856116fb565b600060209050601f8311600181146117f257600084156117e0578287015190505b6117ea858261176c565b865550611852565b601f198416611800866115dc565b60005b8281101561182857848901518255600182019150602085019450602081019050611803565b868310156118455784890151611841601f89168261174e565b8355505b6001600288020188555050505b505050505050565b600061187561187061186b846110ce565b611660565b6110ce565b9050919050565b60006118878261185a565b9050919050565b60006118998261187c565b9050919050565b6118a98161188e565b82525050565b60006118ba8261129b565b6118c48185611476565b93506118d48185602086016112b7565b6118dd81610f92565b840191505092915050565b6118f18161131a565b82525050565b600060c08201905061190c6000830189611227565b61191960208301886118a0565b61192660408301876111eb565b61193360608301866111eb565b818103608083015261194581856118af565b905061195460a08301846118e8565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006040820190506119a360008301856118a0565b6119b060208301846111eb565b9392505050565b7f596f75206172656e277420746865206f776e6572000000000000000000000000600082015250565b60006119ed601483611476565b91506119f8826119b7565b602082019050919050565b60006020820190508181036000830152611a1c816119e0565b9050919050565b60006020820190508181036000830152611a3d81846118af565b905092915050565b60006080820190508181036000830152611a5f81876118af565b9050611a6e6020830186611227565b8181036040830152611a8081856118af565b9050611a8f60608301846111eb565b95945050505050565b7f4f6e6c79207468652072656365697665722063616e20636f6e6669726d4d657360008201527f7361676520746865206d65737361676500000000000000000000000000000000602082015250565b6000611af4603083611476565b9150611aff82611a98565b604082019050919050565b60006020820190508181036000830152611b2381611ae7565b9050919050565b7f54686973206d6573736167652068617320616c7265616479206265656e20636f60008201527f6e6669726d656400000000000000000000000000000000000000000000000000602082015250565b6000611b86602783611476565b9150611b9182611b2a565b604082019050919050565b60006020820190508181036000830152611bb581611b79565b9050919050565b600081905092915050565b50565b6000611bd7600083611bbc565b9150611be282611bc7565b600082019050919050565b6000611bf882611bca565b9150819050919050565b7f4661696c656420746f20776974686472617720415641582066726f6d20636f6e60008201527f7472616374000000000000000000000000000000000000000000000000000000602082015250565b6000611c5e602583611476565b9150611c6982611c02565b604082019050919050565b60006020820190508181036000830152611c8d81611c51565b905091905056fea2646970667358221220452bc5148c8b10a277a02be3040a7055b6ccc37dcd1151f0dd479e94384b63a664736f6c63430008110033";

type MessengerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MessengerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Messenger__factory extends ContractFactory {
  constructor(...args: MessengerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _numOfPendingLimits: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<Messenger> {
    return super.deploy(
      _numOfPendingLimits,
      overrides || {}
    ) as Promise<Messenger>;
  }
  override getDeployTransaction(
    _numOfPendingLimits: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_numOfPendingLimits, overrides || {});
  }
  override attach(address: string): Messenger {
    return super.attach(address) as Messenger;
  }
  override connect(signer: Signer): Messenger__factory {
    return super.connect(signer) as Messenger__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MessengerInterface {
    return new utils.Interface(_abi) as MessengerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Messenger {
    return new Contract(address, _abi, signerOrProvider) as Messenger;
  }
}
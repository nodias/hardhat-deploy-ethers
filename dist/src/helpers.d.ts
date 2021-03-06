import type { ethers } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import type { SignerWithAddress } from "./signer-with-address";
export interface Libraries {
    [libraryName: string]: string;
}
export interface FactoryOptions {
    signer?: ethers.Signer;
    libraries?: Libraries;
}
export declare function getSignerOrNull(hre: HardhatRuntimeEnvironment, address: string): Promise<SignerWithAddress | null>;
export declare function getSigner(hre: HardhatRuntimeEnvironment, address: string): Promise<SignerWithAddress>;
export declare function getSigners(hre: HardhatRuntimeEnvironment): Promise<SignerWithAddress[]>;
export declare function getNamedSigners(hre: HardhatRuntimeEnvironment): Promise<Record<string, SignerWithAddress>>;
export declare function getUnnamedSigners(hre: HardhatRuntimeEnvironment): Promise<SignerWithAddress[]>;
export declare function getNamedSignerOrNull(hre: HardhatRuntimeEnvironment, name: string): Promise<SignerWithAddress | null>;
export declare function getNamedSigner(hre: HardhatRuntimeEnvironment, name: string): Promise<SignerWithAddress>;
export declare function getContractFactory(hre: HardhatRuntimeEnvironment, name: string, signerOrOptions?: ethers.Signer | string | FactoryOptions): Promise<ethers.ContractFactory>;
export declare function getContractFactory(hre: HardhatRuntimeEnvironment, abi: any[], bytecode: ethers.utils.BytesLike, signer?: ethers.Signer | string): Promise<ethers.ContractFactory>;
export declare function getContractAt(hre: HardhatRuntimeEnvironment, nameOrAbi: string | any[], address: string, signer?: ethers.Signer | string): Promise<ethers.Contract>;
export declare function getContract(env: HardhatRuntimeEnvironment, contractName: string, signer?: ethers.Signer | string): Promise<ethers.Contract>;
export declare function getContractOrNull(env: HardhatRuntimeEnvironment, contractName: string, signer?: ethers.Signer | string): Promise<ethers.Contract | null>;
//# sourceMappingURL=helpers.d.ts.map
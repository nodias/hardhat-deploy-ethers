"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("hardhat/config");
const plugins_1 = require("hardhat/plugins");
const helpers_1 = require("./helpers");
require("./type-extensions");
config_1.extendEnvironment((hre) => {
    hre.ethers = plugins_1.lazyObject(() => {
        const { createProviderProxy, } = require("./provider-proxy");
        const { ethers } = require("ethers");
        const providerProxy = createProviderProxy(hre.network.provider);
        return {
            ...ethers,
            // The provider wrapper should be removed once this is released
            // https://github.com/nomiclabs/hardhat/pull/608
            provider: providerProxy,
            // We cast to any here as we hit a limitation of Function#bind and
            // overloads. See: https://github.com/microsoft/TypeScript/issues/28582
            getContractFactory: helpers_1.getContractFactory.bind(null, hre),
            getContractAt: helpers_1.getContractAt.bind(null, hre),
            getSigners: async () => helpers_1.getSigners(hre),
            getSigner: async (address) => helpers_1.getSigner(hre, address),
            getSignerOrNull: async (address) => helpers_1.getSignerOrNull(hre, address),
            getNamedSigners: async () => helpers_1.getNamedSigners(hre),
            getNamedSigner: async (name) => helpers_1.getNamedSigner(hre, name),
            getNamedSignerOrNull: async (name) => helpers_1.getNamedSignerOrNull(hre, name),
            getUnnamedSigners: async () => helpers_1.getUnnamedSigners(hre),
            getContract: async (name, signer) => helpers_1.getContract(hre, name, signer),
            getContractOrNull: async (name, signer) => helpers_1.getContractOrNull(hre, name, signer),
        };
    });
});
//# sourceMappingURL=index.js.map
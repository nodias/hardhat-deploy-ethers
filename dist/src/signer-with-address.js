"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class SignerWithAddress extends ethers_1.ethers.Signer {
    constructor(address, _signer) {
        super();
        this.address = address;
        this._signer = _signer;
        this.provider = _signer.provider;
    }
    static async create(signer) {
        return new SignerWithAddress(await signer.getAddress(), signer);
    }
    async getAddress() {
        return this.address;
    }
    signMessage(message) {
        return this._signer.signMessage(message);
    }
    signTransaction(transaction) {
        return this._signer.signTransaction(transaction);
    }
    sendTransaction(transaction) {
        return this._signer.sendTransaction(transaction);
    }
    connect(provider) {
        return new SignerWithAddress(this.address, this._signer.connect(provider));
    }
    toJSON() {
        return `<SignerWithAddress ${this.address}>`;
    }
}
exports.SignerWithAddress = SignerWithAddress;
//# sourceMappingURL=signer-with-address.js.map
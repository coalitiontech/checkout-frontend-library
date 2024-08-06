"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAddressBatchRequest = void 0;
const src_1 = require("..");
const isObjectEmpty_1 = require("./isObjectEmpty");
const isObjectEquals_1 = require("./isObjectEquals");
const buildAddressBatchRequest = (address, type) => {
    const { setBillingAddress, updateBillingAddress, setShippingAddress, updateShippingAddress } = src_1.apiTypeKeys;
    const prevAddress = type === 'shipping' ? (0, src_1.getShippingAddress)() : (0, src_1.getBillingAddress)();
    const isPrevEmpty = (0, isObjectEmpty_1.isObjectEmpty)(prevAddress);
    const isEqual = (0, isObjectEquals_1.isObjectEquals)(prevAddress, address);
    if (isPrevEmpty && !isEqual) {
        return {
            apiType: type === 'shipping' ? setShippingAddress : setBillingAddress,
            payload: address
        };
    }
    else if (!isEqual) {
        return {
            apiType: type === 'shipping' ? updateShippingAddress : updateBillingAddress,
            payload: address
        };
    }
    return null;
};
exports.buildAddressBatchRequest = buildAddressBatchRequest;

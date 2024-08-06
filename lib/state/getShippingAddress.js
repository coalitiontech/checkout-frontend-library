"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShippingAddress = void 0;
const variables_1 = require("../variables");
function getShippingAddress() {
    return JSON.parse(JSON.stringify(variables_1.applicationState.addresses.shipping));
}
exports.getShippingAddress = getShippingAddress;

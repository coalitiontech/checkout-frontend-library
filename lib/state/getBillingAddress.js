"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBillingAddress = void 0;
const variables_1 = require("../variables");
function getBillingAddress() {
    return JSON.parse(JSON.stringify(variables_1.applicationState.addresses.billing));
}
exports.getBillingAddress = getBillingAddress;

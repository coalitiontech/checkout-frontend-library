"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAddresses = void 0;
const state_1 = require("./");
function setAddresses({ shipping, billing }) {
    if (shipping) {
        (0, state_1.setShippingAddress)(shipping);
    }
    if (billing) {
        (0, state_1.setBillingAddress)(billing);
    }
}
exports.setAddresses = setAddresses;

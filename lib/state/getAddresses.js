"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddresses = void 0;
const variables_1 = require("../variables");
function getAddresses() {
    return JSON.parse(JSON.stringify(variables_1.applicationState.addresses));
}
exports.getAddresses = getAddresses;

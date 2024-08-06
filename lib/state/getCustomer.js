"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomer = void 0;
const variables_1 = require("../variables");
function getCustomer() {
    return JSON.parse(JSON.stringify(variables_1.applicationState.customer));
}
exports.getCustomer = getCustomer;

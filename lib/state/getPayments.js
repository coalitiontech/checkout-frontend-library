"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPayments = void 0;
const variables_1 = require("../variables");
function getPayments() {
    return JSON.parse(JSON.stringify(variables_1.applicationState.payments));
}
exports.getPayments = getPayments;

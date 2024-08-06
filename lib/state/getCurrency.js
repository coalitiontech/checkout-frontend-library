"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrency = void 0;
const variables_1 = require("../variables");
function getCurrency() {
    return JSON.parse(JSON.stringify(variables_1.applicationState.currency));
}
exports.getCurrency = getCurrency;

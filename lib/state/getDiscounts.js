"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDiscounts = void 0;
const variables_1 = require("../variables");
function getDiscounts() {
    return JSON.parse(JSON.stringify(variables_1.applicationState.discounts));
}
exports.getDiscounts = getDiscounts;

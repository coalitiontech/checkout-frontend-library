"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDiscounts = void 0;
const variables_1 = require("../variables");
function setDiscounts(newDiscounts) {
    variables_1.discounts.length = 0;
    newDiscounts.forEach(discount => {
        variables_1.discounts.push(discount);
    });
}
exports.setDiscounts = setDiscounts;

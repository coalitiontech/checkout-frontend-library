"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFees = void 0;
const variables_1 = require("../variables");
function setFees(newFees) {
    variables_1.fees.length = 0;
    newFees && newFees.forEach(fee => {
        variables_1.fees.push(fee);
    });
}
exports.setFees = setFees;

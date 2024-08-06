"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPayments = void 0;
const variables_1 = require("../variables");
function setPayments(newPayments) {
    variables_1.payments.length = 0;
    newPayments.forEach(payment => {
        variables_1.payments.push(payment);
    });
}
exports.setPayments = setPayments;

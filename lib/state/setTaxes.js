"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTaxes = void 0;
const variables_1 = require("../variables");
function setTaxes(newTaxes) {
    variables_1.taxes.length = 0;
    newTaxes.forEach(tax => {
        variables_1.taxes.push(tax);
    });
}
exports.setTaxes = setTaxes;

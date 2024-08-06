"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCurrency = void 0;
const variables_1 = require("../variables");
function setCurrency({ iso_code, iso_numeric_code, symbol, format, has_decimal, show_iso_code }) {
    variables_1.currency.symbol = symbol;
    variables_1.currency.format = format;
    variables_1.currency.has_decimal = has_decimal;
    variables_1.currency.iso_code = iso_code;
    variables_1.currency.show_iso_code = show_iso_code;
    variables_1.currency.iso_numeric_code = iso_numeric_code;
}
exports.setCurrency = setCurrency;

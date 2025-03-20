"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDisplayCurrency = void 0;
const variables_1 = require("../variables");
function setDisplayCurrency({ iso_code, iso_numeric_code, symbol, format, has_decimal, show_iso_code }) {
    variables_1.applicationState.display_currency = {
        iso_code,
        iso_numeric_code,
        symbol,
        format,
        has_decimal,
        show_iso_code
    };
}
exports.setDisplayCurrency = setDisplayCurrency;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setShipping = void 0;
const variables_1 = require("../variables");
function setShipping({ selected_shipping, available_shipping_lines, taxes, discounts }) {
    variables_1.shipping.selected_shipping = selected_shipping;
    variables_1.shipping.available_shipping_lines = available_shipping_lines;
    variables_1.shipping.taxes = taxes;
    variables_1.shipping.discounts = discounts;
}
exports.setShipping = setShipping;

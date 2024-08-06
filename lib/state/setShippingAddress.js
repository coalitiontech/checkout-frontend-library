"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setShippingAddress = void 0;
const variables_1 = require("../variables");
function setShippingAddress({ id, first_name, last_name, address_line_1, address_line_2, country, city, province, country_code, province_code, postal_code, business_name, phone_number }) {
    variables_1.shippingAddress.id = id ? id : undefined;
    variables_1.shippingAddress.first_name = first_name ? first_name : '';
    variables_1.shippingAddress.last_name = last_name ? last_name : '';
    variables_1.shippingAddress.address_line_1 = address_line_1 ? address_line_1 : '';
    variables_1.shippingAddress.address_line_2 = address_line_2 ? address_line_2 : '';
    variables_1.shippingAddress.country = country ? country : '';
    variables_1.shippingAddress.city = city ? city : '';
    variables_1.shippingAddress.province = province ? province : '';
    variables_1.shippingAddress.country_code = country_code ? country_code : '';
    variables_1.shippingAddress.province_code = province_code ? province_code : '';
    variables_1.shippingAddress.postal_code = postal_code ? postal_code : '';
    variables_1.shippingAddress.business_name = business_name ? business_name : '';
    variables_1.shippingAddress.phone_number = phone_number ? phone_number : '';
}
exports.setShippingAddress = setShippingAddress;

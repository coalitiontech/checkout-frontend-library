"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBillingAddress = void 0;
const variables_1 = require("../variables");
function setBillingAddress({ id, first_name, last_name, address_line_1, address_line_2, country, city, province, country_code, province_code, postal_code, business_name, phone_number }) {
    variables_1.billingAddress.id = id ? id : undefined;
    variables_1.billingAddress.first_name = first_name ? first_name : '';
    variables_1.billingAddress.last_name = last_name ? last_name : '';
    variables_1.billingAddress.address_line_1 = address_line_1 ? address_line_1 : '';
    variables_1.billingAddress.address_line_2 = address_line_2 ? address_line_2 : '';
    variables_1.billingAddress.country = country ? country : '';
    variables_1.billingAddress.city = city ? city : '';
    variables_1.billingAddress.province = province ? province : '';
    variables_1.billingAddress.country_code = country_code ? country_code : '';
    variables_1.billingAddress.province_code = province_code ? province_code : '';
    variables_1.billingAddress.postal_code = postal_code ? postal_code : '';
    variables_1.billingAddress.business_name = business_name ? business_name : '';
    variables_1.billingAddress.phone_number = phone_number ? phone_number : '';
}
exports.setBillingAddress = setBillingAddress;

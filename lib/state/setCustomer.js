"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCustomer = void 0;
const variables_1 = require("../variables");
function setCustomer({ platform_id, public_id, first_name, last_name, email_address, saved_addresses, accepts_marketing }) {
    variables_1.customer.platform_id = platform_id;
    variables_1.customer.public_id = public_id;
    variables_1.customer.accepts_marketing = accepts_marketing;
    variables_1.customer.first_name = first_name;
    variables_1.customer.last_name = last_name;
    variables_1.customer.email_address = email_address;
    variables_1.customer.saved_addresses = saved_addresses;
}
exports.setCustomer = setCustomer;

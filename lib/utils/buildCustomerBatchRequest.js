"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCustomerBatchRequest = void 0;
const src_1 = require("..");
const utils_1 = require("./");
const buildCustomerBatchRequest = (firstName, lastName, email) => {
    const { addGuestCustomer, updateCustomer } = src_1.apiTypeKeys;
    const { customer: prevCustomer } = (0, src_1.getApplicationState)();
    const previous = {
        email: prevCustomer.email_address,
        firstName: prevCustomer.first_name,
        lastName: prevCustomer.last_name
    };
    const userLogin = !!prevCustomer.platform_id && prevCustomer.platform_id !== '0';
    if (!userLogin) {
        const payload = {
            first_name: firstName,
            last_name: lastName,
            email_address: email,
            accepts_marketing: prevCustomer.accepts_marketing
        };
        if ((0, utils_1.isObjectEmpty)(previous)) {
            return { apiType: addGuestCustomer, payload };
        }
        else if (!(0, utils_1.isObjectEquals)({ firstName, lastName, email }, previous)) {
            return { apiType: updateCustomer, payload };
        }
    }
    return null;
};
exports.buildCustomerBatchRequest = buildCustomerBatchRequest;

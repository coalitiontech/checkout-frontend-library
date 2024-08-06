"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCsrfToken = void 0;
const variables_1 = require("../variables");
/**
 * ## getJwtToken
 * This function get the Crsf token
 * required to call Checkout APIs.
 */
function getCsrfToken() {
    return variables_1.auth.csrfToken;
}
exports.getCsrfToken = getCsrfToken;

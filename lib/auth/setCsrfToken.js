"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCsrfToken = void 0;
const variables_1 = require("../variables");
/**
 * ## setCsrfToken
 * This function set the Csrf token
 * required to call Checkout APIs.
 *
 * @param token Provide the valid Csrf token.
 */
function setCsrfToken(token) {
    variables_1.auth.csrfToken = token;
}
exports.setCsrfToken = setCsrfToken;

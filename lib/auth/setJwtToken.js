"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setJwtToken = void 0;
const variables_1 = require("../variables");
/**
 * ## setJwtToken
 * This function set the Jwt token
 * required to start Checkout Session through APIs.
 *
 * @param token Provide the valid jwt token.
 */
function setJwtToken(token) {
    variables_1.auth.jwtToken = token;
}
exports.setJwtToken = setJwtToken;

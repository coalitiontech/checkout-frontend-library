"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJwtToken = void 0;
const variables_1 = require("../variables");
/**
 * ## getJwtToken
 * This function get the Jwt token
 * required to start Checkout Session through APIs.
 */
function getJwtToken() {
    return variables_1.auth.jwtToken;
}
exports.getJwtToken = getJwtToken;

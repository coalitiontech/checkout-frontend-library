"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPublicOrderId = void 0;
const variables_1 = require("../variables");
/**
 * ## setPublicOrderId
 *
 * This function sets the Public Order Id
 * required to call Checkout APIs
 *
 * @param token Provide the Public Order Id
 */
function setPublicOrderId(token) {
    variables_1.auth.publicOrderId = token;
}
exports.setPublicOrderId = setPublicOrderId;

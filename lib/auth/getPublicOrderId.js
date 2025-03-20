"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicOrderId = void 0;
const variables_1 = require("../variables");
/**
 * ## getPublicOrderId
 *
 * This function get the Public Order Id
 * required to call Checkout APIs
 */
function getPublicOrderId() {
    return variables_1.auth.publicOrderId;
}
exports.getPublicOrderId = getPublicOrderId;

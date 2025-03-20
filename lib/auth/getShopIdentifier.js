"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShopIdentifier = void 0;
const variables_1 = require("../variables");
/**
 * ## getShopIdentifier
 * This function get the shop identifier
 * required to call Checkout APIs.
 */
function getShopIdentifier() {
    return variables_1.auth.shopIdentifier;
}
exports.getShopIdentifier = getShopIdentifier;

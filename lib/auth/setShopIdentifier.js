"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setShopIdentifier = void 0;
const variables_1 = require("../variables");
/**
 * ## setShopIdentifier
 * This function set the shop identifier
 * required to call Checkout APIs.
 *
 * @param shopIdentifier Provide the valid shop identifier.
 */
function setShopIdentifier(shopIdentifier) {
    variables_1.auth.shopIdentifier = shopIdentifier;
}
exports.setShopIdentifier = setShopIdentifier;

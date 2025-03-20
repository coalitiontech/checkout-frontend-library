"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvironment = void 0;
const variables_1 = require("../variables");
/**
 * ## getEnvironment
 * This function get the basic environment variables
 * defined to call Checkout APIs.
 */
function getEnvironment() {
    return Object.assign({}, variables_1.environment);
}
exports.getEnvironment = getEnvironment;

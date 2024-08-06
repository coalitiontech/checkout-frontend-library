"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShipping = void 0;
const variables_1 = require("../variables");
function getShipping() {
    return JSON.parse(JSON.stringify(variables_1.applicationState.shipping));
}
exports.getShipping = getShipping;

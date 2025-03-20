"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderInitialData = void 0;
const variables_1 = require("../variables");
function getOrderInitialData() {
    return JSON.parse(JSON.stringify(variables_1.orderInitialData));
}
exports.getOrderInitialData = getOrderInitialData;

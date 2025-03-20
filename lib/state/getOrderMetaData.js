"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderMetaData = void 0;
const variables_1 = require("../variables");
function getOrderMetaData() {
    return JSON.parse(JSON.stringify(variables_1.applicationState.order_meta_data));
}
exports.getOrderMetaData = getOrderMetaData;

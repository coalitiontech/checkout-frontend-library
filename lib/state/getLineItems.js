"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLineItems = void 0;
const variables_1 = require("../variables");
function getLineItems() {
    return JSON.parse(JSON.stringify(variables_1.applicationState.line_items));
}
exports.getLineItems = getLineItems;

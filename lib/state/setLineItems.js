"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLineItems = void 0;
const variables_1 = require("../variables");
function setLineItems(newLineItems) {
    variables_1.line_items.length = 0;
    newLineItems.forEach(item => {
        variables_1.line_items.push(item);
    });
}
exports.setLineItems = setLineItems;

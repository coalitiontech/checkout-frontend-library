"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setOrderMetaData = void 0;
const variables_1 = require("../variables");
function setOrderMetaData({ cart_parameters, note_attributes, notes, tags }) {
    variables_1.order_meta_data.cart_parameters = cart_parameters;
    variables_1.order_meta_data.note_attributes = note_attributes;
    variables_1.order_meta_data.notes = notes;
    variables_1.order_meta_data.tags = tags;
}
exports.setOrderMetaData = setOrderMetaData;

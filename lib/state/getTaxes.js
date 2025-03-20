"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaxes = void 0;
const variables_1 = require("../variables");
function getTaxes() {
    return JSON.parse(JSON.stringify(variables_1.applicationState.taxes));
}
exports.getTaxes = getTaxes;

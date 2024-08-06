"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApplicationState = void 0;
const variables_1 = require("../variables");
function getApplicationState() {
    return JSON.parse(JSON.stringify(variables_1.applicationState));
}
exports.getApplicationState = getApplicationState;

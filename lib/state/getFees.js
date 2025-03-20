"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFees = void 0;
const variables_1 = require("../variables");
function getFees() {
    return JSON.parse(JSON.stringify(variables_1.applicationState.fees));
}
exports.getFees = getFees;

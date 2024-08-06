"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = void 0;
function isObject(objectToTest) {
    return typeof objectToTest === 'object' && objectToTest !== null && !Array.isArray(objectToTest);
}
exports.isObject = isObject;

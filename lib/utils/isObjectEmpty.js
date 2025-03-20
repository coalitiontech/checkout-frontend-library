"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObjectEmpty = void 0;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
function isObjectEmpty(object) {
    return object ? Object.values(object).every(x => x === null || x === '' || x === undefined) : true;
}
exports.isObjectEmpty = isObjectEmpty;

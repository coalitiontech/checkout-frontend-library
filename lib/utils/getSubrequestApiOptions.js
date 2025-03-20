"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubrequestApiOptions = void 0;
const src_1 = require("..");
/** getSubrequestApiOptions
 *
 * returns a formatted object that'll represent the 'options' for a fetch api call. doesnt add headers
 * or include credentials. meant to be used to construct batch subrequests and not in isolation
 *
 * @param type type of api that needs to be constructed
 * @param b object for body of request
 */
function getSubrequestApiOptions(type, b = {}) {
    var _a, _b;
    const { method } = (_a = src_1.apiTypes[type]) !== null && _a !== void 0 ? _a : { method: src_1.methods.GET };
    const { path } = (_b = src_1.apiTypes[type]) !== null && _b !== void 0 ? _b : { path: '' };
    const payload = b && Object.keys(b).length === 0 ? null : JSON.stringify(b);
    return { method, endpoint: path, payload };
}
exports.getSubrequestApiOptions = getSubrequestApiOptions;

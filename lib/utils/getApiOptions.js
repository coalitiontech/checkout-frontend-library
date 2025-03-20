"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiOptions = void 0;
const src_1 = require("..");
/** getApiOptions
 *
 * returns a formatted object that'll represent the 'options' for a fetch api call
 *
 * @param type type of api that needs to be constructed
 * @param b object for body of request
 */
function getApiOptions(type, b = {}) {
    var _a;
    const { method, useJwt } = (_a = src_1.apiTypes[type]) !== null && _a !== void 0 ? _a : { method: src_1.methods.GET };
    const mode = 'cors';
    const credentials = 'include';
    const body = b && Object.keys(b).length === 0 ? null : JSON.stringify(b);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    if (useJwt) {
        headers.append('Authorization', `Bearer ${(0, src_1.getJwtToken)()}`);
    }
    return { method, mode, credentials, headers, body };
}
exports.getApiOptions = getApiOptions;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiUrlWithParams = exports.getApiUrl = void 0;
const src_1 = require("..");
/** getApiUrl
 *
 * returns the formatted string of an url for a specific api
 *
 * @param type type of api that needs to be constructed
 */
function getApiUrl(type) {
    var _a;
    const env = (0, src_1.getEnvironment)();
    const shopId = (0, src_1.getShopIdentifier)();
    const publicOrderId = (0, src_1.getPublicOrderId)();
    const { path } = (_a = src_1.apiTypes[type]) !== null && _a !== void 0 ? _a : { path: '' };
    return `${env.url}/${env.path}/storefront/${shopId}/${publicOrderId}${path}`;
}
exports.getApiUrl = getApiUrl;
function getApiUrlWithParams(type, values) {
    const url = getApiUrl(type);
    const paramsUrl = new URL(url);
    const params = new URLSearchParams();
    Object.keys(values).forEach(key => {
        const valuesKey = key;
        params.append(key, values[valuesKey]);
    });
    paramsUrl.search = new URLSearchParams(params).toString();
    return paramsUrl.toString();
}
exports.getApiUrlWithParams = getApiUrlWithParams;

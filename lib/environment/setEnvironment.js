"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setEnvironment = void 0;
const src_1 = require("..");
const variables_1 = require("../variables");
/**
 * ## setEnvironment
 * This function set basic environment variables necessary
 *  to define the url and path to call Checkout APIs.
 *
 * @param type Use one of the keys on {@linkcode environmentTypes}.
 * Only 'production', 'staging' or 'local' are valid.
 *
 * @param path Optional - Use to define Checkout APIs path after the Url.
 * Used only for 'local' type.
 *
 * @param url Optional - Use to define API Url.
 * Used only for 'local' type.
 */
function setEnvironment(type, path, url) {
    switch (type) {
        case src_1.environmentTypes.production:
            setProdEnv();
            break;
        case src_1.environmentTypes.staging:
            setStagEnv();
            break;
        case src_1.environmentTypes.local:
            setLocEnv(path, url);
            break;
        default:
            throw 'Invalid environment type!';
    }
}
exports.setEnvironment = setEnvironment;
function setProdEnv() {
    variables_1.environment.type = src_1.environmentTypes.production;
    variables_1.environment.url = src_1.environmentUrls.production;
    variables_1.environment.path = src_1.environmentPath;
}
function setStagEnv() {
    variables_1.environment.type = src_1.environmentTypes.staging;
    variables_1.environment.url = src_1.environmentUrls.staging;
    variables_1.environment.path = src_1.environmentPath;
}
function setLocEnv(path, url) {
    variables_1.environment.type = src_1.environmentTypes.local;
    variables_1.environment.url = url !== null && url !== void 0 ? url : src_1.environmentUrls.staging;
    variables_1.environment.path = path !== null && path !== void 0 ? path : src_1.environmentPath;
}

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAPI = exports.callFetch = void 0;
const src_1 = require("..");
const variables_1 = require("../variables");
const sleep = (time) => new Promise(func => setTimeout(func, time));
/**
 * # FetchAPI
 *
 * This function takes in an url and optional parameters, fetches data from the specified api and returns the data
 *
 * @param url URL to fetch data from
 * @param numOfRetries
 * @param options RequestInit parameters to be supplied to fetch
 */
function callFetch(url, numOfRetries, totalNumberOfRetries, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const returnObject = Object.assign({}, src_1.baseReturnObject);
        try {
            const response = yield fetch(url, options);
            if (response.ok) {
                returnObject.response = yield response.json();
                returnObject.success = true;
                returnObject.status = response.status;
                return returnObject;
            }
            else if (numOfRetries > 0 && variables_1.retryErrorCodeList.find(code => code === response.status)) {
                const index = totalNumberOfRetries - numOfRetries;
                yield sleep(variables_1.retryErrorCodeWaitTime[index]);
                return callFetch(url, numOfRetries - 1, totalNumberOfRetries, options);
            }
            else {
                const message = 'Unable to process request';
                const body = yield getResponseBody(response);
                returnObject.error = new src_1.FetchError(response.status, message, response.statusText, body);
                returnObject.success = false;
                returnObject.status = response.status;
                returnObject.response = typeof returnObject.error.body !== 'string' ? returnObject.error.body : null;
                return returnObject;
            }
        }
        catch (e) {
            const { status, message } = src_1.apiErrors.general;
            if (e instanceof Error) {
                returnObject.error = new src_1.FetchError(status, `${message} - ${e.message}`, message, null, { error: e });
            }
            else {
                returnObject.error = new src_1.FetchError(status, `${message} - ${e}`);
            }
            returnObject.success = false;
            return returnObject;
        }
    });
}
exports.callFetch = callFetch;
function fetchAPI(url, options = {}, numOfRetries = 0, callback) {
    if (numOfRetries > 5) {
        numOfRetries = 5;
    }
    return callFetch(url, numOfRetries, numOfRetries, options)
        .then((res) => {
        callback && callback(res);
        return res;
    });
}
exports.fetchAPI = fetchAPI;
function getResponseBody(response) {
    return __awaiter(this, void 0, void 0, function* () {
        const contentType = response.headers.get('content-type');
        return (contentType && contentType.indexOf('application/json') !== -1)
            ? yield response.json()
            : yield response.text();
    });
}

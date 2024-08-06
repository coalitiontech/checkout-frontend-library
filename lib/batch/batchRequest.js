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
exports.batchRequest = void 0;
const src_1 = require("..");
/**
 * # batchRequest
 *
 * execute an array of api requests in the same request
 * accepts an array of IBatchRequests
 * IBatchableRequest {
 *     apiType: keyof IApiTypes,
 *     payload: IGetApiOptionsBody,
 * }
 *
 * @param requests array of batch requests
 * @param numOfRetries
 */
function batchRequest(requests, numOfRetries = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const { batchRequest } = src_1.apiTypeKeys;
        const url = (0, src_1.getApiUrl)(batchRequest);
        const subRequests = [];
        requests.forEach(batchRequest => {
            subRequests.push((0, src_1.getSubrequestApiOptions)(batchRequest.apiType, batchRequest.payload));
        });
        const options = (0, src_1.getApiOptions)(batchRequest, { 'sub_requests': subRequests });
        const fetchRes = yield (0, src_1.fetchAPI)(url, options, numOfRetries);
        const { keysToTest } = src_1.apiTypes.batchRequest;
        return (0, src_1.checkApiResponse)(fetchRes, keysToTest, true);
    });
}
exports.batchRequest = batchRequest;

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
exports.processOrder = void 0;
const src_1 = require("..");
/**
 * # processOrder
 *
 * calls post process order endpoint and starts backend processing of the order
 *
 */
function processOrder(numOfRetries = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const { processOrder } = src_1.apiTypeKeys;
        const url = (0, src_1.getApiUrl)(processOrder);
        const options = (0, src_1.getApiOptions)(processOrder);
        const fetchRes = yield (0, src_1.fetchAPI)(url, options, numOfRetries);
        //Every status but SCA action needed
        if (fetchRes.status !== src_1.httpStatusCode.ACCEPTED) {
            const { keysToTest } = src_1.apiTypes.processOrder;
            return (0, src_1.checkApiResponse)(fetchRes, keysToTest);
        }
        else {
            return fetchRes;
        }
    });
}
exports.processOrder = processOrder;

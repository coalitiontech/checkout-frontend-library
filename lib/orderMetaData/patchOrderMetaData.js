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
exports.patchOrderMetaData = void 0;
const src_1 = require("..");
/**
 * # patchOrderMetaData
 *
 * patches meta data for the order
 *
 * @param {@link IPatchOrderMetaData} requestBody - Patch Order Meta Data Request Body.
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
function patchOrderMetaData(requestBody, numOfRetries = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const { patchOrderMetaData } = src_1.apiTypeKeys;
        const url = (0, src_1.getApiUrl)(patchOrderMetaData);
        const options = (0, src_1.getApiOptions)(patchOrderMetaData, requestBody);
        const fetchRes = yield (0, src_1.fetchAPI)(url, options, numOfRetries);
        const { keysToTest } = src_1.apiTypes.patchOrderMetaData;
        return (0, src_1.checkApiResponse)(fetchRes, keysToTest);
    });
}
exports.patchOrderMetaData = patchOrderMetaData;

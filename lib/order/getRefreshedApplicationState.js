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
exports.getRefreshedApplicationState = void 0;
const src_1 = require("..");
/**
 * # getRefreshedApplicationState
 *
 * Get a refreshed copy of the application state
 *
 */
function getRefreshedApplicationState(numOfRetries = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const { getApplicationState } = src_1.apiTypeKeys;
        const url = (0, src_1.getApiUrl)(getApplicationState);
        const options = (0, src_1.getApiOptions)(getApplicationState);
        const fetchRes = yield (0, src_1.fetchAPI)(url, options, numOfRetries);
        const { keysToTest } = src_1.apiTypes.getApplicationState;
        return (0, src_1.checkApiResponse)(fetchRes, keysToTest);
    });
}
exports.getRefreshedApplicationState = getRefreshedApplicationState;

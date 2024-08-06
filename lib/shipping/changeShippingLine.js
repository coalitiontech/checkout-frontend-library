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
exports.changeShippingLine = void 0;
const src_1 = require("..");
/**
 * # changeShippingLine
 *
 * calls post shipping lines endpoint and sets the values for a shipping line
 *
 * @param index id of the appropriate available shipping line
 * @param numOfRetries
 */
function changeShippingLine(index, numOfRetries = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const { changeShippingLines } = src_1.apiTypeKeys;
        const url = (0, src_1.getApiUrl)(changeShippingLines);
        const options = (0, src_1.getApiOptions)(changeShippingLines, { index });
        const fetchRes = yield (0, src_1.fetchAPI)(url, options, numOfRetries);
        const { keysToTest } = src_1.apiTypes.changeShippingLines;
        return (0, src_1.checkApiResponse)(fetchRes, keysToTest);
    });
}
exports.changeShippingLine = changeShippingLine;

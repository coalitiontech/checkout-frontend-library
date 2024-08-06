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
exports.setBillingAddress = void 0;
const src_1 = require("..");
/** setBillingAddress
 *
 * Call API to set the Billing address to the order
 */
function setBillingAddress(requestBody, numOfRetries = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const { setBillingAddress } = src_1.apiTypeKeys;
        const options = (0, src_1.getApiOptions)(setBillingAddress, requestBody);
        const url = (0, src_1.getApiUrl)(setBillingAddress);
        const fetchRes = yield (0, src_1.fetchAPI)(url, options, numOfRetries);
        return (0, src_1.checkApiResponse)(fetchRes, [src_1.keysToTestFromResponse.data, src_1.keysToTestFromResponse.applicationState]);
    });
}
exports.setBillingAddress = setBillingAddress;

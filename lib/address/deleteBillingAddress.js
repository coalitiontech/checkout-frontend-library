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
exports.deleteBillingAddress = void 0;
const src_1 = require("..");
/** deleteBillingAddress
 *
 * Call API to delete the Billing address to the order
 */
function deleteBillingAddress(numOfRetries = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const { deleteBillingAddress } = src_1.apiTypeKeys;
        const { keysToTest } = src_1.apiTypes.deleteBillingAddress;
        const options = (0, src_1.getApiOptions)(deleteBillingAddress);
        const url = (0, src_1.getApiUrl)(deleteBillingAddress);
        const fetchRes = yield (0, src_1.fetchAPI)(url, options, numOfRetries);
        return (0, src_1.checkApiResponse)(fetchRes, keysToTest);
    });
}
exports.deleteBillingAddress = deleteBillingAddress;

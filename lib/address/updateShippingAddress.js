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
exports.updateShippingAddress = void 0;
const src_1 = require("..");
/** updateShippingAddress
 *
 * Call API to update the Shipping address to the order
 */
function updateShippingAddress(requestBody, numOfRetries = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const { updateShippingAddress } = src_1.apiTypeKeys;
        const options = (0, src_1.getApiOptions)(updateShippingAddress, requestBody);
        const url = (0, src_1.getApiUrl)(updateShippingAddress);
        const fetchRes = yield (0, src_1.fetchAPI)(url, options, numOfRetries);
        return (0, src_1.checkApiResponse)(fetchRes, [src_1.keysToTestFromResponse.data, src_1.keysToTestFromResponse.applicationState]);
    });
}
exports.updateShippingAddress = updateShippingAddress;

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
exports.walletPayOnApprove = void 0;
const src_1 = require("..");
/** walletPayOnApprove
 *
 * handles the on approve change event for wallet pay
 *
 * @param {@link IWalletPayOnApproveRequest} requestBody - on approve data from the wallet payment
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
function walletPayOnApprove(requestBody, numOfRetries = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const { walletPayOnApprove } = src_1.apiTypeKeys;
        const options = (0, src_1.getApiOptions)(walletPayOnApprove, requestBody);
        const url = (0, src_1.getApiUrl)(walletPayOnApprove);
        const fetchRes = yield (0, src_1.fetchAPI)(url, options, numOfRetries);
        return (0, src_1.checkApiResponse)(fetchRes, [src_1.keysToTestFromResponse.data, src_1.keysToTestFromResponse.applicationState]);
    });
}
exports.walletPayOnApprove = walletPayOnApprove;

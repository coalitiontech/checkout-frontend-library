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
exports.deleteLineItem = void 0;
const src_1 = require("..");
/**
 * Delete line item
 *
 * @param requestBody Request body to add the line item
 * @param requestBody.platform_id Id of the product on the platform.
 * @param requestBody.sku This line item's stock keeping unit.
 * @param requestBody.quantity The quantity of the line item
 * @param requestBody.line_item_key The unique key of the line item used by Checkout
 */
function deleteLineItem(requestBody, numOfRetries = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const { deleteLineItem } = src_1.apiTypeKeys;
        const { keysToTest } = src_1.apiTypes.deleteLineItem;
        const url = (0, src_1.getApiUrl)(deleteLineItem);
        const options = (0, src_1.getApiOptions)(deleteLineItem, requestBody);
        const fetchRes = yield (0, src_1.fetchAPI)(url, options, numOfRetries);
        return (0, src_1.checkApiResponse)(fetchRes, keysToTest);
    });
}
exports.deleteLineItem = deleteLineItem;

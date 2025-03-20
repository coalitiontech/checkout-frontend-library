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
exports.updateLineItemQuantity = void 0;
const src_1 = require("..");
/**
 * Update line item quantity
 *
 * @param lineItemKey The unique key of the line item to update
 * @param quantity The new quantity of the line item
 * @param numOfRetries
 */
const updateLineItemQuantity = (lineItemKey, quantity, numOfRetries = 0) => __awaiter(void 0, void 0, void 0, function* () {
    const { updateItem } = src_1.apiTypeKeys;
    const { keysToTest } = src_1.apiTypes.updateItem;
    const url = (0, src_1.getApiUrl)(updateItem);
    const options = (0, src_1.getApiOptions)(updateItem, {
        line_item_key: lineItemKey,
        quantity,
    });
    const fetchRes = yield (0, src_1.fetchAPI)(url, options, numOfRetries);
    return (0, src_1.checkApiResponse)(fetchRes, keysToTest);
});
exports.updateLineItemQuantity = updateLineItemQuantity;

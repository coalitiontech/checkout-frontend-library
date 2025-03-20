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
exports.validateDiscount = void 0;
const src_1 = require("..");
/**
 * # ValidateDiscount
 *
 * Validate a discount without adding to the order
 *
 * @param code discount code to validate
 * @param numOfRetries
 */
function validateDiscount(code, numOfRetries = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const { validateDiscount } = src_1.apiTypeKeys;
        const url = (0, src_1.getApiUrlWithParams)(validateDiscount, { discount_code: code });
        const options = (0, src_1.getApiOptions)(validateDiscount);
        return yield (0, src_1.fetchAPI)(url, options, numOfRetries);
    });
}
exports.validateDiscount = validateDiscount;

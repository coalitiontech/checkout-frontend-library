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
exports.updateCustomer = void 0;
const src_1 = require("..");
/**
 * # updateCustomer
 *
 * update a customer to the order
 *
 * @param firstName Customer First Name
 * @param lastName Customer Last Name
 * @param email Customer Email
 * @param acceptsMarketing
 * @param numOfRetries
 */
function updateCustomer(firstName, lastName, email, acceptsMarketing, numOfRetries = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const { updateCustomer } = src_1.apiTypeKeys;
        const url = (0, src_1.getApiUrl)(updateCustomer);
        const options = (0, src_1.getApiOptions)(updateCustomer, { first_name: firstName, last_name: lastName, email_address: email, accepts_marketing: acceptsMarketing });
        const fetchRes = yield (0, src_1.fetchAPI)(url, options, numOfRetries);
        const { keysToTest } = src_1.apiTypes.updateCustomer;
        return (0, src_1.checkApiResponse)(fetchRes, keysToTest);
    });
}
exports.updateCustomer = updateCustomer;

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
exports.addGuestCustomer = void 0;
const src_1 = require("..");
/**
 * # addGuestCustomer
 *
 * Add a not authenticated customer to the order
 *
 * @param firstName Customer First Name
 * @param lastName Customer Last Name
 * @param email Customer Email
 * @param acceptsMarketing
 * @param numOfRetries
 */
function addGuestCustomer(firstName, lastName, email, acceptsMarketing = false, numOfRetries = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const { addGuestCustomer } = src_1.apiTypeKeys;
        const url = (0, src_1.getApiUrl)(addGuestCustomer);
        const options = (0, src_1.getApiOptions)(addGuestCustomer, { first_name: firstName, last_name: lastName, email_address: email, accepts_marketing: acceptsMarketing });
        const fetchRes = yield (0, src_1.fetchAPI)(url, options, numOfRetries);
        const { keysToTest } = src_1.apiTypes.addGuestCustomer;
        return (0, src_1.checkApiResponse)(fetchRes, keysToTest);
    });
}
exports.addGuestCustomer = addGuestCustomer;

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
exports.validateAddress = void 0;
const src_1 = require("..");
/**
 *
 * Validates the postal code coming from shipping / billing address
 *
 * @param firstName
 * @param lastName
 * @param addressLine1
 * @param addressLine2
 * @param city
 * @param postalCode
 * @param province
 * @param provinceCode
 * @param country
 * @param countryCode
 * @param businessName
 * @param phoneNumber
 * @param numOfRetries
 */
function validateAddress(firstName, lastName, addressLine1, addressLine2, city, postalCode, province, provinceCode, country, countryCode, businessName, phoneNumber, numOfRetries = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const { validateAddress } = src_1.apiTypeKeys;
        let params = { first_name: firstName, last_name: lastName, address_line_1: addressLine1, address_line_2: addressLine2, city: city, postal_code: postalCode, province: province, country_code: countryCode, country: country, province_code: provinceCode };
        if (businessName) {
            params = Object.assign(Object.assign({}, params), { business_name: businessName });
        }
        if (phoneNumber) {
            params = Object.assign(Object.assign({}, params), { phone_number: phoneNumber });
        }
        const url = (0, src_1.getApiUrlWithParams)(validateAddress, params);
        const options = (0, src_1.getApiOptions)(validateAddress);
        return yield (0, src_1.fetchAPI)(url, options, numOfRetries);
    });
}
exports.validateAddress = validateAddress;

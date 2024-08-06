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
exports.cssStylingPaymentIframe = void 0;
const src_1 = require("..");
/**
 * cssStylingPaymentIframe
 *
 * Use this endpoint to style the Payment Isolation Gateway Interface (PIGI) using CSS and media queries.
 */
function cssStylingPaymentIframe(body, numOfRetries = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const { cssStylingPaymentIframe } = src_1.apiTypeKeys;
        const options = (0, src_1.getApiOptions)(cssStylingPaymentIframe, body);
        const url = (0, src_1.getApiUrl)(cssStylingPaymentIframe);
        const fetchRes = yield (0, src_1.fetchAPI)(url, options, numOfRetries);
        return (0, src_1.checkApiResponse)(fetchRes, src_1.apiTypes[cssStylingPaymentIframe].keysToTest);
    });
}
exports.cssStylingPaymentIframe = cssStylingPaymentIframe;

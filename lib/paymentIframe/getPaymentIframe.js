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
exports.getPaymentIframeUrl = void 0;
const src_1 = require("..");
/**
 *
 * Use this endpoint to retrieve the Payment Isolation Gateway Interface (PIGI) and load into an iframe.
 *
 */
function getPaymentIframeUrl() {
    return __awaiter(this, void 0, void 0, function* () {
        const returnObject = Object.assign({}, src_1.baseReturnObject);
        const { getPaymentIframe } = src_1.apiTypeKeys;
        const url = (0, src_1.getApiUrlWithParams)(getPaymentIframe, { token: (0, src_1.getJwtToken)() });
        returnObject.success = true;
        returnObject.response = { data: { url } };
        return returnObject;
    });
}
exports.getPaymentIframeUrl = getPaymentIframeUrl;

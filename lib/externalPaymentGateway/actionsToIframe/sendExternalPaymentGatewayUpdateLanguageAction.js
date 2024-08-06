"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendExternalPaymentGatewayUpdateLanguageAction = void 0;
const src_1 = require("../..");
function sendExternalPaymentGatewayUpdateLanguageAction(paymentGateway, languageCode) {
    const action = {
        type: src_1.externalPaymentGatewayToIframeActionTypes.EXTERNAL_PAYMENT_GATEWAY_UPDATE_LANGUAGE,
        payload: {
            language: languageCode
        }
    };
    (0, src_1.sendExternalPaymentGatewayActionToIframe)(paymentGateway, action);
}
exports.sendExternalPaymentGatewayUpdateLanguageAction = sendExternalPaymentGatewayUpdateLanguageAction;

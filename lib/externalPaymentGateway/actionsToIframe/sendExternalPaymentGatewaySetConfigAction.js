"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendExternalPaymentGatewaySetConfigAction = void 0;
const src_1 = require("../..");
function sendExternalPaymentGatewaySetConfigAction(paymentGateway) {
    const action = {
        type: src_1.externalPaymentGatewayToIframeActionTypes.EXTERNAL_PAYMENT_GATEWAY_SET_CONFIG,
        payload: paymentGateway,
    };
    (0, src_1.sendExternalPaymentGatewayActionToIframe)(paymentGateway, action);
}
exports.sendExternalPaymentGatewaySetConfigAction = sendExternalPaymentGatewaySetConfigAction;

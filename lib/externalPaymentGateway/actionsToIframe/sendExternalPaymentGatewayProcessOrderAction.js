"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendExternalPaymentGatewayProcessOrderAction = void 0;
const src_1 = require("../..");
function sendExternalPaymentGatewayProcessOrderAction(paymentGateway) {
    const action = {
        type: src_1.externalPaymentGatewayToIframeActionTypes.EXTERNAL_PAYMENT_GATEWAY_BILLING_ADDRESS_CHANGED,
    };
    (0, src_1.sendExternalPaymentGatewayActionToIframe)(paymentGateway, action);
}
exports.sendExternalPaymentGatewayProcessOrderAction = sendExternalPaymentGatewayProcessOrderAction;

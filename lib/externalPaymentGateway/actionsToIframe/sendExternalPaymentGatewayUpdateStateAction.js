"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendExternalPaymentGatewayUpdateStateAction = void 0;
const src_1 = require("../..");
function sendExternalPaymentGatewayUpdateStateAction(paymentGateway, state) {
    const action = {
        type: src_1.externalPaymentGatewayToIframeActionTypes.EXTERNAL_PAYMENT_GATEWAY_UPDATE_STATE,
        payload: state
    };
    (0, src_1.sendExternalPaymentGatewayActionToIframe)(paymentGateway, action);
}
exports.sendExternalPaymentGatewayUpdateStateAction = sendExternalPaymentGatewayUpdateStateAction;

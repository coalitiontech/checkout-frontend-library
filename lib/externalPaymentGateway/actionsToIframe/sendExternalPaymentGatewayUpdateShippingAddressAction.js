"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendExternalPaymentGatewayUpdateShippingAddressAction = void 0;
const src_1 = require("../..");
function sendExternalPaymentGatewayUpdateShippingAddressAction(paymentGateway, address) {
    const action = {
        type: src_1.externalPaymentGatewayToIframeActionTypes.EXTERNAL_PAYMENT_GATEWAY_SHIPPING_ADDRESS_CHANGED,
        payload: address,
    };
    (0, src_1.sendExternalPaymentGatewayActionToIframe)(paymentGateway, action);
}
exports.sendExternalPaymentGatewayUpdateShippingAddressAction = sendExternalPaymentGatewayUpdateShippingAddressAction;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendExternalPaymentGatewayActionToIframe = void 0;
const src_1 = require("../..");
/**
 * This function sends a Action to the iFrame using postMessage
 */
function sendExternalPaymentGatewayActionToIframe(paymentGateway, action) {
    const iframeWindow = (0, src_1.getExternalPaymentGatewayIframeWindow)(paymentGateway);
    if (iframeWindow) {
        iframeWindow.postMessage(action, '*');
    }
}
exports.sendExternalPaymentGatewayActionToIframe = sendExternalPaymentGatewayActionToIframe;

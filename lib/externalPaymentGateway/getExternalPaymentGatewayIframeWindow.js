"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExternalPaymentGatewayIframeWindow = void 0;
/**
 * Get the contentWindow of the external payment gateway iFrame
 */
function getExternalPaymentGatewayIframeWindow(externalPaymentGateway) {
    const iframeElement = document.getElementById(externalPaymentGateway.public_id);
    if (iframeElement) {
        return iframeElement.contentWindow || null;
    }
    return null;
}
exports.getExternalPaymentGatewayIframeWindow = getExternalPaymentGatewayIframeWindow;

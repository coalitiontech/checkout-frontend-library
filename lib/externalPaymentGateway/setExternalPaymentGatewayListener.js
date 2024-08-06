"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeExternalPaymentGatewayListener = exports.setExternalPaymentGatewayListener = void 0;
const constants_1 = require("../variables/constants");
let externalPaymentGatewayMessageListener;
function setExternalPaymentGatewayListener(paymentGateway, callback) {
    //unsubscribe from any orphan listeners before subscribing/resubscribing
    window.removeEventListener('message', externalPaymentGatewayMessageListener);
    externalPaymentGatewayMessageListener = (event) => {
        const { type } = event.data || {};
        if (type && type in constants_1.externalPaymentGatewayToParentActionTypes) {
            if (typeof callback === 'function') {
                callback(event);
            }
            else {
                callback.handleEvent(event);
            }
        }
    };
    window.addEventListener('message', externalPaymentGatewayMessageListener);
}
exports.setExternalPaymentGatewayListener = setExternalPaymentGatewayListener;
/**
 * Remove the callback that receives the responses from external payment gateways
 */
function removeExternalPaymentGatewayListener() {
    window.removeEventListener('message', externalPaymentGatewayMessageListener);
}
exports.removeExternalPaymentGatewayListener = removeExternalPaymentGatewayListener;

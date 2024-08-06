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
exports.sendSelectPaymentMethodActionAsync = exports.sendSelectPaymentMethodAction = void 0;
const src_1 = require("..");
/**
 * ## sendSelectPaymentMethodAction
 *
 * This action is to be sent to select a payment method
 * @param payload Provide a object with either the index or gatewayName, if both are used, PIGI will use index.
 */
function sendSelectPaymentMethodAction(payload) {
    const action = { actionType: src_1.pigiActionTypes.PIGI_SELECT_PAYMENT_METHOD, payload };
    return (0, src_1.sendPigiAction)(action);
}
exports.sendSelectPaymentMethodAction = sendSelectPaymentMethodAction;
/**
 * ## sendSelectPaymentMethodActionAsync
 *
 * This action is to be sent to select a payment method
 * @param payload Provide a object with either the index or gatewayName, if both are used, PIGI will use index.
 *
 * This method waits for a response back from PIGI before returning.
 */
function sendSelectPaymentMethodActionAsync(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const action = { actionType: src_1.pigiActionTypes.PIGI_SELECT_PAYMENT_METHOD, payload };
        return yield (0, src_1.sendPigiActionAsync)(action);
    });
}
exports.sendSelectPaymentMethodActionAsync = sendSelectPaymentMethodActionAsync;

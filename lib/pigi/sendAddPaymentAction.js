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
exports.sendAddPaymentActionAsync = exports.sendAddPaymentAction = void 0;
const src_1 = require("..");
const action = { actionType: src_1.pigiActionTypes.PIGI_ADD_PAYMENT };
/**
 * ## sendAddPaymentAction
 *
 * This action is to be sent after the customer has entered payment information
 * and the payment is to be added to the order so the order can be processed.
 *
 * This only tokenizes the payment information then puts it onto the order
 * and does not authorize or capture the payment.
 */
function sendAddPaymentAction() {
    return (0, src_1.sendPigiAction)(action);
}
exports.sendAddPaymentAction = sendAddPaymentAction;
/**
 * ## sendAddPaymentActionAsync
 *
 * This action is to be sent after the customer has entered payment information
 * and the payment is to be added to the order so the order can be processed.
 *
 * This only tokenizes the payment information then puts it onto the order
 * and does not authorize or capture the payment.
 *
 * This method waits for a response back from PIGI before returning.
 */
function sendAddPaymentActionAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, src_1.sendPigiActionAsync)(action);
    });
}
exports.sendAddPaymentActionAsync = sendAddPaymentActionAsync;

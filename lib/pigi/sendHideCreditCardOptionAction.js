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
exports.sendHideCreditCardOptionActionAsync = exports.sendHideCreditCardOptionAction = void 0;
const src_1 = require("..");
const action = { actionType: src_1.pigiActionTypes.PIGI_HIDE_CREDIT_CARD_OPTION };
/**
 * ## sendHideCreditCardOptionAction
 *
 * This action is to be sent after PIGI has been loaded. It causes the credit card
 * fields in PIGI to be hidden.
 */
function sendHideCreditCardOptionAction() {
    return (0, src_1.sendPigiAction)(action);
}
exports.sendHideCreditCardOptionAction = sendHideCreditCardOptionAction;
/**
 * ## sendHideCreditCardOptionActionAsync
 *
 * This action is to be sent after PIGI has been loaded. It causes the credit card
 * fields in PIGI to be hidden.
 *
 * This method waits for a response back from PIGI before returning.
 */
function sendHideCreditCardOptionActionAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, src_1.sendPigiActionAsync)(action);
    });
}
exports.sendHideCreditCardOptionActionAsync = sendHideCreditCardOptionActionAsync;

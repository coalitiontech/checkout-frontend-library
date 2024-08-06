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
exports.sendRefreshOrderActionAsync = exports.sendRefreshOrderAction = void 0;
const src_1 = require("..");
const _1 = require(".");
const action = { actionType: src_1.pigiActionTypes.PIGI_REFRESH_ORDER };
/**
 * ## sendRefreshOrderAction
 *
 * This action is to be sent if PIGI was displayed and the order was updated.
 * Payment gateways will require updated information about the customer or order to add the payment to the order.
 */
function sendRefreshOrderAction() {
    return (0, src_1.sendPigiAction)(action);
}
exports.sendRefreshOrderAction = sendRefreshOrderAction;
/**
 * ## sendRefreshOrderActionAsync
 *
 * This action is to be sent if PIGI was displayed and the order was updated.
 * Payment gateways will require updated information about the customer or order to add the payment to the order.
 *
 * This method waits for a response back from PIGI before returning.
 */
function sendRefreshOrderActionAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, _1.sendPigiActionAsync)(action);
    });
}
exports.sendRefreshOrderActionAsync = sendRefreshOrderActionAsync;

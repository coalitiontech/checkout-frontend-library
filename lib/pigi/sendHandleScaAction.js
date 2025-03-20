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
exports.sendHandleScaActionAsync = exports.sendHandleScaAction = void 0;
const src_1 = require("..");
/**
 * ## sendHandleScaAction
 *
 * This action is to be sent to request Pigi to handle any SCA/3DS actions.
 */
function sendHandleScaAction(clientSecretToken) {
    const action = {
        actionType: src_1.pigiActionTypes.PIGI_HANDLE_SCA,
        payload: {
            clientSecretToken
        }
    };
    return (0, src_1.sendPigiAction)(action);
}
exports.sendHandleScaAction = sendHandleScaAction;
/**
 * ## sendHandleScaActionAsync
 *
 * This action is to be sent to request Pigi to handle any SCA/3DS actions.
 *
 * This method waits for a response back from PIGI before returning.
 */
function sendHandleScaActionAsync(clientSecretToken) {
    return __awaiter(this, void 0, void 0, function* () {
        const action = {
            actionType: src_1.pigiActionTypes.PIGI_HANDLE_SCA,
            payload: {
                clientSecretToken
            }
        };
        return yield (0, src_1.sendPigiActionAsync)(action);
    });
}
exports.sendHandleScaActionAsync = sendHandleScaActionAsync;

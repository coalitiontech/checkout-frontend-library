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
exports.sendDisplayErrorMessageActionAsync = exports.sendDisplayErrorMessageAction = void 0;
const src_1 = require("..");
/**
 * ## sendDisplayErrorMessageAction
 *
 * This action is to be sent if PIGI was displayed and we need to disdplay an error message.
 */
function sendDisplayErrorMessageAction(message, subType) {
    const action = {
        actionType: src_1.pigiActionTypes.PIGI_DISPLAY_ERROR_MESSAGE,
        payload: {
            message: message,
            sub_type: subType
        }
    };
    return (0, src_1.sendPigiAction)(action);
}
exports.sendDisplayErrorMessageAction = sendDisplayErrorMessageAction;
/**
 * ## sendDisplayErrorMessageActionAsync
 *
 * This action is to be sent if PIGI was displayed and we need to display an error message.
 *
 * This method waits for a response back from PIGI before returning.
 */
function sendDisplayErrorMessageActionAsync(message, subType) {
    return __awaiter(this, void 0, void 0, function* () {
        const action = {
            actionType: src_1.pigiActionTypes.PIGI_DISPLAY_ERROR_MESSAGE,
            payload: {
                message: message,
                sub_type: subType
            }
        };
        return yield (0, src_1.sendPigiActionAsync)(action);
    });
}
exports.sendDisplayErrorMessageActionAsync = sendDisplayErrorMessageActionAsync;

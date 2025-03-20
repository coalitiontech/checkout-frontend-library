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
exports.sendClearErrorMessageActionAsync = exports.sendClearErrorMessageAction = void 0;
const src_1 = require("..");
const action = { actionType: src_1.pigiActionTypes.PIGI_CLEAR_ERROR_MESSAGES };
/**
 * ## sendClearErrorMessageAction
 *
 * This action is to be sent when we need to clear the error message(s) displayed in PIGI
 */
function sendClearErrorMessageAction() {
    return (0, src_1.sendPigiAction)(action);
}
exports.sendClearErrorMessageAction = sendClearErrorMessageAction;
/**
 * ## sendClearErrorMessageActionAsync
 *
 * This action is to be sent when we need to clear the error message(s) displayed in PIGI
 *
 * This method waits for a response back from PIGI before returning.
 */
function sendClearErrorMessageActionAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, src_1.sendPigiActionAsync)(action);
    });
}
exports.sendClearErrorMessageActionAsync = sendClearErrorMessageActionAsync;

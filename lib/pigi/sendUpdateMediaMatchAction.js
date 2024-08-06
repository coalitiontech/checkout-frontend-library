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
exports.sendUpdateMediaMatchActionAsync = exports.sendUpdateMediaMatchAction = void 0;
const src_1 = require("..");
const _1 = require(".");
/**
 * ## sendUpdateMediaMatchAction
 *
 * To update media rules in PIGI this action can be sent along with a payload containing
 * the media condition and if it is a match.
 *
 * @param conditionText media rule condition.
 * @param matches true or false if condition is met.
 */
function sendUpdateMediaMatchAction(conditionText, matches) {
    const action = {
        actionType: src_1.pigiActionTypes.PIGI_UPDATE_MEDIA_MATCH,
        payload: { conditionText, matches }
    };
    return (0, src_1.sendPigiAction)(action);
}
exports.sendUpdateMediaMatchAction = sendUpdateMediaMatchAction;
/**
 * ## sendUpdateMediaMatchActionAsync
 *
 * To update media rules in PIGI this action can be sent along with a payload containing
 * the media condition and if it is a match.
 *
 * @param conditionText media rule condition.
 * @param matches true or false if condition is met.
 *
 * This method waits for a response back from PIGI before returning.
 */
function sendUpdateMediaMatchActionAsync(conditionText, matches) {
    return __awaiter(this, void 0, void 0, function* () {
        const action = {
            actionType: src_1.pigiActionTypes.PIGI_UPDATE_MEDIA_MATCH,
            payload: { conditionText, matches }
        };
        return yield (0, _1.sendPigiActionAsync)(action);
    });
}
exports.sendUpdateMediaMatchActionAsync = sendUpdateMediaMatchActionAsync;

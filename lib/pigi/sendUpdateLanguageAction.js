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
exports.sendUpdateLanguageActionAsync = exports.sendUpdateLanguageAction = void 0;
const src_1 = require("..");
const _1 = require(".");
function sendUpdateLanguageAction(languageCode) {
    const action = {
        actionType: src_1.pigiActionTypes.PIGI_UPDATE_LANGUAGE,
        payload: {
            language: languageCode
        }
    };
    return (0, src_1.sendPigiAction)(action);
}
exports.sendUpdateLanguageAction = sendUpdateLanguageAction;
function sendUpdateLanguageActionAsync(languageCode) {
    return __awaiter(this, void 0, void 0, function* () {
        const action = {
            actionType: src_1.pigiActionTypes.PIGI_UPDATE_LANGUAGE,
            payload: {
                language: languageCode
            }
        };
        return yield (0, _1.sendPigiActionAsync)(action);
    });
}
exports.sendUpdateLanguageActionAsync = sendUpdateLanguageActionAsync;

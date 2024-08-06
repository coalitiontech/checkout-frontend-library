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
exports.dispatchAppHookEvent = void 0;
const src_1 = require("..");
/**
 * Dispatch App Hook Event
 *
 * @param requestBody Request body to dispatch app hook event
 * @param requestBody.uuid The unique identifier of the plugin that is expected to receive the app_hook event.
 * @param requestBody.hook The name of the app_hook event to send to the plugin.
 * @param requestBody.app_hook_data Data that will be provided as part of the app_hook plugin Event payload.
 */
function dispatchAppHookEvent(requestBody, numOfRetries = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const { dispatchAppHookEvent } = src_1.apiTypeKeys;
        const { keysToTest } = src_1.apiTypes.dispatchAppHookEvent;
        const url = (0, src_1.getApiUrl)(dispatchAppHookEvent);
        const options = (0, src_1.getApiOptions)(dispatchAppHookEvent, requestBody);
        const fetchRes = yield (0, src_1.fetchAPI)(url, options, numOfRetries);
        return (0, src_1.checkApiResponse)(fetchRes, keysToTest);
    });
}
exports.dispatchAppHookEvent = dispatchAppHookEvent;

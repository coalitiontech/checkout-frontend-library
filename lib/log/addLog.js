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
exports.addLog = void 0;
const src_1 = require("..");
/**
 * # addLog
 *
 * This make requests which contain messages that will be logged through the usual Checkout logging mechanisms.
 *
 * @param message Message to add to Logs - Maximum of 200 Characters
 * @param key Optional Key to add to NR counters
 * @param details stringify Json object to add to log context - Maximum of 700 Characters
 * @param numOfRetries
 *
 */
function addLog(message, key, details, numOfRetries = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const { addLog } = src_1.apiTypeKeys;
        const { keysToTest } = src_1.apiTypes.addLog;
        const url = (0, src_1.getApiUrl)(addLog);
        const options = (0, src_1.getApiOptions)(addLog, { message, key, details });
        const fetchRes = yield (0, src_1.fetchAPI)(url, options, numOfRetries);
        return (0, src_1.checkApiResponse)(fetchRes, keysToTest);
    });
}
exports.addLog = addLog;

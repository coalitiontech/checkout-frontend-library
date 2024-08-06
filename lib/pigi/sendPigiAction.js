"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPigiActionAsync = exports.sendPigiAction = void 0;
const src_1 = require("..");
/**
 * ## sendAction
 *
 * This function sends a Action to the iFrame using postMessage
 */
function sendPigiAction(action) {
    const response = Object.assign({}, src_1.baseReturnObject);
    const iframeWindow = (0, src_1.getPigiFrameWindow)();
    if (iframeWindow) {
        iframeWindow.postMessage(action, '*');
        response.success = true;
    }
    else {
        response.error = new src_1.FetchError(src_1.apiErrors.noPigiIframe.status, src_1.apiErrors.noPigiIframe.message);
    }
    return response;
}
exports.sendPigiAction = sendPigiAction;
/**
 * ## sendActionAsync
 *
 * This function sends a Action to the iFrame using postMessage and waits for a response
 */
function sendPigiActionAsync(action) {
    return new Promise((resolve, reject) => {
        const iframeListener = (event) => {
            const pigiResponse = event.data;
            if (pigiResponse && pigiResponse.responseType === action.actionType) {
                if (pigiResponse.payload.success) {
                    window.removeEventListener('message', iframeListener);
                    resolve(pigiResponse);
                }
                else {
                    window.removeEventListener('message', iframeListener);
                    reject(pigiResponse);
                }
            }
        };
        window.addEventListener('message', iframeListener);
        const response = sendPigiAction(action);
        if (!response.success) {
            window.removeEventListener('message', iframeListener);
            reject(response.error);
        }
        //Timeout if haven't heard answer in 3 seconds
        setTimeout(() => {
            window.removeEventListener('message', iframeListener);
            reject('Pigi response timeout');
        }, 10000);
    });
}
exports.sendPigiActionAsync = sendPigiActionAsync;

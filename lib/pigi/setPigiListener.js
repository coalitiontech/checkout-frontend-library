"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePigiListener = exports.setPigiListener = void 0;
const src_1 = require("..");
const variables_1 = require("../variables");
let pigiMessageListener;
/**
 * ## setPigiListener
 * Set the PIGI iFrame id to be used for the actions
 * and the callback that will receive the responses from PIGI iFrame.
 *
 * @param iFrameId Provide the Pigi iFrame Id.
 * @param callback Provide the callback function to call when PIGI responses are received.
 *
 * @returns The function used to subscribe to pigi messages, needed to unsubscribe from listener
 */
function setPigiListener(iFrameId, callback) {
    //unsubscribe from any orphan listeners before subscribing/resubscribing
    window.removeEventListener('message', pigiMessageListener);
    variables_1.pigi.iFrameId = iFrameId.replace('#', '');
    pigiMessageListener = (event) => {
        const { responseType } = event.data || {};
        if (responseType && responseType in src_1.pigiActionTypes) {
            if (typeof callback === 'function') {
                callback(event);
            }
            else {
                callback.handleEvent(event);
            }
        }
    };
    window.addEventListener('message', pigiMessageListener);
}
exports.setPigiListener = setPigiListener;
/**
 * ## removePigiListener
 * Remove the callback that receives the responses from PIGI iFrame.
 *
 */
function removePigiListener() {
    window.removeEventListener('message', pigiMessageListener);
}
exports.removePigiListener = removePigiListener;

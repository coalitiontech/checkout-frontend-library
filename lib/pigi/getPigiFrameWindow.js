"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPigiFrameWindow = void 0;
const variables_1 = require("../variables");
/**
 * ## getPigiFrameWindow
 * Get the contentWindow of the PIGI iFrame
 */
function getPigiFrameWindow() {
    const selector = `iframe#${variables_1.pigi.iFrameId}`;
    const iframeElement = document.querySelector(selector);
    if (iframeElement) {
        return iframeElement.contentWindow || null;
    }
    return null;
}
exports.getPigiFrameWindow = getPigiFrameWindow;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchError = void 0;
class FetchError {
    constructor(status, msg, statusText, body, metaData) {
        this.name = 'FetchError';
        this.message = msg;
        this.status = status;
        this.statusText = statusText;
        this.body = body;
        this.metaData = metaData;
        Object.setPrototypeOf(this, new.target.prototype); // sets prototype explicitly (FetchError.Prototype)
    }
}
exports.FetchError = FetchError;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorFromFieldName = void 0;
const src_1 = require("..");
function getErrorFromFieldName(fieldName, errorType = src_1.generalApiResponseParsingErrorType.emptyField) {
    switch (fieldName) {
        case src_1.keysToTestFromResponse.data:
            return errorType === src_1.generalApiResponseParsingErrorType.emptyField ? src_1.apiErrors.emptyResData : src_1.apiErrors.noResData;
        case src_1.keysToTestFromResponse.applicationState:
            return errorType === src_1.generalApiResponseParsingErrorType.emptyField ? src_1.apiErrors.emptyAppState : src_1.apiErrors.noAppState;
        default:
            return errorType === src_1.generalApiResponseParsingErrorType.emptyField ? src_1.apiErrors.emptyFieldInResponse : src_1.apiErrors.noFieldInResponse;
    }
}
exports.getErrorFromFieldName = getErrorFromFieldName;

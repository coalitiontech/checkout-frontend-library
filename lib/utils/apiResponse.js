"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkApiResponse = void 0;
const src_1 = require("..");
const state_1 = require("../state");
const setOrderInitialData_1 = require("../state/setOrderInitialData");
function checkApiResponse(fetchRes, keysToCheck, checkOnFail = false) {
    const success = fetchRes.success;
    const response = fetchRes.response;
    const originalError = fetchRes.error;
    const errorMessages = [];
    if (!keysToCheck || (Array.isArray(keysToCheck) && keysToCheck.length <= 0)) {
        fetchRes.success = false;
        fetchRes.error = new src_1.FetchError(src_1.apiErrors.emptyKeysToCheck.status, src_1.apiErrors.emptyKeysToCheck.message);
        return fetchRes;
    }
    if (checkOnFail || success) {
        keysToCheck.map((key) => {
            const parentElement = (0, src_1.findKeyInObject)(response, key);
            if (parentElement || parentElement === '') {
                let valueExtractedFromObject = response;
                if (parentElement !== '') {
                    const pathToElement = parentElement.toString().split('.');
                    pathToElement.forEach((pathKey) => {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        valueExtractedFromObject = valueExtractedFromObject[pathKey];
                    });
                }
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                if (!valueExtractedFromObject[key]) {
                    const error = (0, src_1.getErrorFromFieldName)(key);
                    errorMessages.push(error.message.replace('{{field}}', key));
                }
                else if (key === src_1.keysToTestFromResponse.applicationState) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    (0, state_1.setApplicationState)(valueExtractedFromObject[key]);
                }
                else if (key === src_1.keysToTestFromResponse.initial_data) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    (0, setOrderInitialData_1.setOrderInitialData)(valueExtractedFromObject[key]);
                }
            }
            else {
                const error = (0, src_1.getErrorFromFieldName)(key, src_1.generalApiResponseParsingErrorType.noField);
                errorMessages.push(error.message.replace('{{field}}', key));
            }
        });
        if (errorMessages.length > 0) {
            const metaData = (originalError === null || originalError === void 0 ? void 0 : originalError.metaData) ? Object.assign(Object.assign({}, originalError.metaData), { fields: errorMessages }) : { fields: errorMessages };
            fetchRes.success = false;
            fetchRes.error = new src_1.FetchError(src_1.apiErrors.errorsInResponse.status, src_1.apiErrors.errorsInResponse.message, undefined, undefined, metaData);
        }
    }
    return fetchRes;
}
exports.checkApiResponse = checkApiResponse;

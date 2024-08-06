import { IApiReturnObject, IPigiResponseType } from "..";
/**
 * ## sendClearErrorMessageAction
 *
 * This action is to be sent when we need to clear the error message(s) displayed in PIGI
 */
export declare function sendClearErrorMessageAction(): IApiReturnObject;
/**
 * ## sendClearErrorMessageActionAsync
 *
 * This action is to be sent when we need to clear the error message(s) displayed in PIGI
 *
 * This method waits for a response back from PIGI before returning.
 */
export declare function sendClearErrorMessageActionAsync(): Promise<IPigiResponseType>;

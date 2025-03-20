import { IApiReturnObject, IPigiResponseType } from "..";
/**
 * ## sendDisplayErrorMessageAction
 *
 * This action is to be sent if PIGI was displayed and we need to disdplay an error message.
 */
export declare function sendDisplayErrorMessageAction(message: string, subType: string): IApiReturnObject;
/**
 * ## sendDisplayErrorMessageActionAsync
 *
 * This action is to be sent if PIGI was displayed and we need to display an error message.
 *
 * This method waits for a response back from PIGI before returning.
 */
export declare function sendDisplayErrorMessageActionAsync(message: string, subType: string): Promise<IPigiResponseType>;

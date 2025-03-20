import { IApiReturnObject, IPigiActionType, IPigiResponseType } from "..";
/**
 * ## sendAction
 *
 * This function sends a Action to the iFrame using postMessage
 */
export declare function sendPigiAction(action: IPigiActionType): IApiReturnObject;
/**
 * ## sendActionAsync
 *
 * This function sends a Action to the iFrame using postMessage and waits for a response
 */
export declare function sendPigiActionAsync(action: IPigiActionType): Promise<IPigiResponseType>;

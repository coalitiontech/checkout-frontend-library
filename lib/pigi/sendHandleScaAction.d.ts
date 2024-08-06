import { IApiReturnObject, IPigiResponseType } from "..";
/**
 * ## sendHandleScaAction
 *
 * This action is to be sent to request Pigi to handle any SCA/3DS actions.
 */
export declare function sendHandleScaAction(clientSecretToken?: string): IApiReturnObject;
/**
 * ## sendHandleScaActionAsync
 *
 * This action is to be sent to request Pigi to handle any SCA/3DS actions.
 *
 * This method waits for a response back from PIGI before returning.
 */
export declare function sendHandleScaActionAsync(clientSecretToken?: string): Promise<IPigiResponseType>;

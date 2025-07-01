import { IApiReturnObject, IPigiResponseType } from "..";
/**
 * ## sendHideCreditCardOptionAction
 *
 * This action is to be sent after PIGI has been loaded. It causes the credit card
 * fields in PIGI to be hidden.
 */
export declare function sendHideCreditCardOptionAction(): IApiReturnObject;
/**
 * ## sendHideCreditCardOptionActionAsync
 *
 * This action is to be sent after PIGI has been loaded. It causes the credit card
 * fields in PIGI to be hidden.
 *
 * This method waits for a response back from PIGI before returning.
 */
export declare function sendHideCreditCardOptionActionAsync(): Promise<IPigiResponseType>;

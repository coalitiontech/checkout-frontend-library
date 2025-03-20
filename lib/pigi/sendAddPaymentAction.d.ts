import { IApiReturnObject, IPigiResponseType } from "..";
/**
 * ## sendAddPaymentAction
 *
 * This action is to be sent after the customer has entered payment information
 * and the payment is to be added to the order so the order can be processed.
 *
 * This only tokenizes the payment information then puts it onto the order
 * and does not authorize or capture the payment.
 */
export declare function sendAddPaymentAction(): IApiReturnObject;
/**
 * ## sendAddPaymentActionAsync
 *
 * This action is to be sent after the customer has entered payment information
 * and the payment is to be added to the order so the order can be processed.
 *
 * This only tokenizes the payment information then puts it onto the order
 * and does not authorize or capture the payment.
 *
 * This method waits for a response back from PIGI before returning.
 */
export declare function sendAddPaymentActionAsync(): Promise<IPigiResponseType>;

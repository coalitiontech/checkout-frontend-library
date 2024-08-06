import { IApiReturnObject, IPigiResponseType } from "..";
/**
 * ## sendRefreshOrderAction
 *
 * This action is to be sent if PIGI was displayed and the order was updated.
 * Payment gateways will require updated information about the customer or order to add the payment to the order.
 */
export declare function sendRefreshOrderAction(): IApiReturnObject;
/**
 * ## sendRefreshOrderActionAsync
 *
 * This action is to be sent if PIGI was displayed and the order was updated.
 * Payment gateways will require updated information about the customer or order to add the payment to the order.
 *
 * This method waits for a response back from PIGI before returning.
 */
export declare function sendRefreshOrderActionAsync(): Promise<IPigiResponseType>;

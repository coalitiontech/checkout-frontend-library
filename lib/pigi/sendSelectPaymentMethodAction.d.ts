import { IApiReturnObject, IPigiResponseType } from "..";
/**
 * ## sendSelectPaymentMethodAction
 *
 * This action is to be sent to select a payment method
 * @param payload Provide a object with either the index or gatewayName, if both are used, PIGI will use index.
 */
export declare function sendSelectPaymentMethodAction(payload: {
    index?: number;
    gatewayName?: string;
}): IApiReturnObject;
/**
 * ## sendSelectPaymentMethodActionAsync
 *
 * This action is to be sent to select a payment method
 * @param payload Provide a object with either the index or gatewayName, if both are used, PIGI will use index.
 *
 * This method waits for a response back from PIGI before returning.
 */
export declare function sendSelectPaymentMethodActionAsync(payload: {
    index?: number;
    gatewayName?: string;
}): Promise<IPigiResponseType>;

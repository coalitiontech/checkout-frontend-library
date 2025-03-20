import { IAddPaymentRequest, IApiReturnObject } from "..";
/** addPayment
 *
 * Adds a new payment to the order.
 *
 * @param {@link IAddPaymentRequest} requestBody - Add Payment Request Body.
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
export declare function addPayment(requestBody: IAddPaymentRequest, numOfRetries?: number): Promise<IApiReturnObject>;

import { IUpdatePaymentRequest, IApiReturnObject } from "..";
/**
 * # updatePayment
 *
 * update a Payment added to the order
 *
 * @param {@link IUpdatePaymentRequest} requestBody - Update Payment Request Body.
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
export declare function updatePayment(requestBody: IUpdatePaymentRequest, numOfRetries?: number): Promise<IApiReturnObject>;

import { IDeletePaymentRequest, IApiReturnObject } from "..";
/**
 * # deletePayment
 *
 * Remove payment added to the order
 *
 * @param {@link IDeletePaymentRequest} requestBody - Delete Payment Request Body.
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
export declare function deletePayment(requestBody: IDeletePaymentRequest, numOfRetries?: number): Promise<IApiReturnObject>;

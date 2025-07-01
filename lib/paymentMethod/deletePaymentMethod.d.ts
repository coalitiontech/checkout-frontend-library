import { IApiReturnObject } from "..";
/**
 * # deletePaymentMethod
 *
 * Remove saved payment method
 *
 * @param {@link string} paymentMethodID - Payment Method pyblic ID to delete.
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
export declare function deletePaymentMethod(paymentMethodID: string, numOfRetries?: number): Promise<IApiReturnObject>;

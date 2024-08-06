import { IApiReturnObject } from "..";
/**
 * # deleteGiftCardPayment
 *
 * Remove gift card payment added to the order
 *
 * @param {string} id - The Id of the Gift Card Payment
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
export declare function deleteGiftCardPayment(id: string, numOfRetries?: number): Promise<IApiReturnObject>;

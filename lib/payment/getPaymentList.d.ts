import { IApiReturnObject } from "..";
/**
 * # getListPayments
 *
 * Use this endpoint to retrieve the list of Payments.
 *
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>}
 */
export declare function getPaymentList(numOfRetries?: number): Promise<IApiReturnObject>;

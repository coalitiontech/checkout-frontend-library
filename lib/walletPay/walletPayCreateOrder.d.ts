import { IApiReturnObject, IWalletPayCreateOrderRequest } from "..";
/** walletPayCreateOrder
 *
 * create new order on payment gateway
 *
 * @param {@link IWalletPayCreateOrderRequest} requestBody - create payment gateway order for specific payment gateways.
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
export declare function walletPayCreateOrder(requestBody: IWalletPayCreateOrderRequest, numOfRetries?: number): Promise<IApiReturnObject>;

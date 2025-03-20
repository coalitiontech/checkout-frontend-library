import { IApiReturnObject, IWalletPayOnShippingRequest } from "..";
/** walletPayOnShipping
 *
 * handles the on shipping change event for wallet pay
 *
 * @param {@link IWalletPayOnShippingRequest} requestBody - on shipping data from the wallet payment
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
export declare function walletPayOnShipping(requestBody: IWalletPayOnShippingRequest, numOfRetries?: number): Promise<IApiReturnObject>;

import { IApiReturnObject, IWalletPayOnApproveRequest } from "..";
/** walletPayOnApprove
 *
 * handles the on approve change event for wallet pay
 *
 * @param {@link IWalletPayOnApproveRequest} requestBody - on approve data from the wallet payment
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
export declare function walletPayOnApprove(requestBody: IWalletPayOnApproveRequest, numOfRetries?: number): Promise<IApiReturnObject>;

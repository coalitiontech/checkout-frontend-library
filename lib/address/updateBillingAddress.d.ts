import { IApiReturnObject, ISetBillingAddressRequest } from "..";
/** updateBillingAddress
 *
 * Call API to update the Billing address to the order
 */
export declare function updateBillingAddress(requestBody: ISetBillingAddressRequest, numOfRetries?: number): Promise<IApiReturnObject>;

import { IApiReturnObject, ISetBillingAddressRequest } from "..";
/** setBillingAddress
 *
 * Call API to set the Billing address to the order
 */
export declare function setBillingAddress(requestBody: ISetBillingAddressRequest, numOfRetries?: number): Promise<IApiReturnObject>;

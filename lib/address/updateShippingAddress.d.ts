import { IApiReturnObject, ISetShippingAddressRequest } from "..";
/** updateShippingAddress
 *
 * Call API to update the Shipping address to the order
 */
export declare function updateShippingAddress(requestBody: ISetShippingAddressRequest, numOfRetries?: number): Promise<IApiReturnObject>;

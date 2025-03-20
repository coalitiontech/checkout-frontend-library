import { IApiReturnObject, ISetShippingAddressRequest } from "..";
/** setShippingAddress
 *
 * Call API to set the Shipping address to the order
 */
export declare function setShippingAddress(requestBody: ISetShippingAddressRequest, numOfRetries?: number): Promise<IApiReturnObject>;

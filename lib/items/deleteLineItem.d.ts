import { IApiReturnObject, ILineItemRequest } from "..";
/**
 * Delete line item
 *
 * @param requestBody Request body to add the line item
 * @param requestBody.platform_id Id of the product on the platform.
 * @param requestBody.sku This line item's stock keeping unit.
 * @param requestBody.quantity The quantity of the line item
 * @param requestBody.line_item_key The unique key of the line item used by Checkout
 */
export declare function deleteLineItem(requestBody: ILineItemRequest, numOfRetries?: number): Promise<IApiReturnObject>;

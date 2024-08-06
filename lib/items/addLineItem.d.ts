import { IApiReturnObject, ILineItemRequestWithPlatformId, ILineItemRequestWithSku } from "..";
/**
 * Add line item
 *
 * @param requestBody Request body to add the line item
 * @param requestBody.platform_id Id of the product on the platform. The platform id field is required when sku is not present.
 * @param requestBody.sku This line item's stock keeping unit. The sku field is required when platform id is not present.
 * @param requestBody.quantity The quantity of the line item
 * @param requestBody.line_item_key The unique key of the line item used by Checkout
 */
export declare function addLineItem(requestBody: ILineItemRequestWithPlatformId | ILineItemRequestWithSku, numOfRetries?: number): Promise<IApiReturnObject>;

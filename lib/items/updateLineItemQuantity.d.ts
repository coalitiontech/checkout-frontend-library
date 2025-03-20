import { IApiReturnObject } from "..";
/**
 * Update line item quantity
 *
 * @param lineItemKey The unique key of the line item to update
 * @param quantity The new quantity of the line item
 * @param numOfRetries
 */
export declare const updateLineItemQuantity: (lineItemKey: string, quantity: number, numOfRetries?: number) => Promise<IApiReturnObject>;

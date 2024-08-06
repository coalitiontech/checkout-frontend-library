import { IApiReturnObject } from "..";
/**
 * # AddDiscount
 *
 * Adds a discount to an order
 *
 * @param code discount code to add
 * @param numOfRetries
 */
export declare function addDiscount(code: string, numOfRetries?: number): Promise<IApiReturnObject>;

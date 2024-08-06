import { IApiReturnObject } from "..";
/**
 * # ValidateDiscount
 *
 * Validate a discount without adding to the order
 *
 * @param code discount code to validate
 * @param numOfRetries
 */
export declare function validateDiscount(code: string, numOfRetries?: number): Promise<IApiReturnObject>;

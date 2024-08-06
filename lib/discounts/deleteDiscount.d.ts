import { IApiReturnObject } from "..";
/**
 * # deleteDiscount
 *
 * deletes the chosen discount from the order
 *
 * @param code discount code to remove
 * @param numOfRetries
 *
 */
export declare function deleteDiscount(code: string, numOfRetries?: number): Promise<IApiReturnObject>;

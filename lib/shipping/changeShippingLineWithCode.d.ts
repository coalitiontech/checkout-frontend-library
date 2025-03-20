import { IApiReturnObject } from "..";
/**
 * # changeShippingLine
 *
 * calls post shipping lines endpoint and sets the values for a shipping line
 *
 * @param index id of the appropriate available shipping line
 * @param code
 * @param numOfRetries
 */
export declare function changeShippingLineWithCode(index: string, code?: string, numOfRetries?: number): Promise<IApiReturnObject>;

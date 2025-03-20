import { IApiReturnObject } from "..";
/**
 * # processOrder
 *
 * calls post process order endpoint and starts backend processing of the order
 *
 */
export declare function processOrder(numOfRetries?: number): Promise<IApiReturnObject>;

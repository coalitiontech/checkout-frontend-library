import { IApiReturnObject, IEstimateShippingLinesRequest } from "..";
/**
 *
 * Retrieve the estimated shipping lines
 *
 */
export declare function estimateShippingLines(requestBody: IEstimateShippingLinesRequest, numOfRetries?: number): Promise<IApiReturnObject>;

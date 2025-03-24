import { IApiReturnObject, IEstimateTaxRequest } from "..";
/** estimateTaxes
 *
 * Get the estimated taxes on the order
 */
export declare function estimateTaxes(requestBody: IEstimateTaxRequest, numOfRetries?: number): Promise<IApiReturnObject>;

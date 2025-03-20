import { IApiReturnObject, IBatchableRequest } from "..";
/**
 * # batchRequest
 *
 * execute an array of api requests in the same request
 * accepts an array of IBatchRequests
 * IBatchableRequest {
 *     apiType: keyof IApiTypes,
 *     payload: IGetApiOptionsBody,
 * }
 *
 * @param requests array of batch requests
 * @param numOfRetries
 */
export declare function batchRequest(requests: Array<IBatchableRequest>, numOfRetries?: number): Promise<IApiReturnObject>;

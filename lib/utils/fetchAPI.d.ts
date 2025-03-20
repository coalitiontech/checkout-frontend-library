import { IApiReturnObject, IFetchCallback } from "..";
/**
 * # FetchAPI
 *
 * This function takes in an url and optional parameters, fetches data from the specified api and returns the data
 *
 * @param url URL to fetch data from
 * @param numOfRetries
 * @param options RequestInit parameters to be supplied to fetch
 */
export declare function callFetch(url: RequestInfo, numOfRetries: number, totalNumberOfRetries: number, options?: RequestInit): Promise<IApiReturnObject>;
export declare function fetchAPI(url: string, options?: RequestInit, numOfRetries?: number, callback?: IFetchCallback): Promise<IApiReturnObject>;

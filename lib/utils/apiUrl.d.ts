import { IApiTypes, IApiUrlQueryParams } from "..";
/** getApiUrl
 *
 * returns the formatted string of an url for a specific api
 *
 * @param type type of api that needs to be constructed
 */
export declare function getApiUrl(type: keyof IApiTypes): string;
export declare function getApiUrlWithParams(type: keyof IApiTypes, values: IApiUrlQueryParams): string;

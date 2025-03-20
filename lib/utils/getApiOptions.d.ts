import { IApiTypes, IGetApiOptionsBody } from "..";
/** getApiOptions
 *
 * returns a formatted object that'll represent the 'options' for a fetch api call
 *
 * @param type type of api that needs to be constructed
 * @param b object for body of request
 */
export declare function getApiOptions(type: keyof IApiTypes, b?: IGetApiOptionsBody): RequestInit;

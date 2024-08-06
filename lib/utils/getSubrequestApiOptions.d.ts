import { IApiTypes, IGetApiOptionsBody, IBatchSubrequest } from "..";
/** getSubrequestApiOptions
 *
 * returns a formatted object that'll represent the 'options' for a fetch api call. doesnt add headers
 * or include credentials. meant to be used to construct batch subrequests and not in isolation
 *
 * @param type type of api that needs to be constructed
 * @param b object for body of request
 */
export declare function getSubrequestApiOptions(type: keyof IApiTypes, b?: IGetApiOptionsBody): IBatchSubrequest;

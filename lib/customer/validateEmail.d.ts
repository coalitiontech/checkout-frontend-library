import { IApiReturnObject } from "..";
/**
 * # validateEmail
 *
 * validates the format of a supplied string as a valid email
 *
 * @param email email to be validated
 * @param numOfRetries email to be validated
 */
export declare function validateEmail(email: string, numOfRetries?: number): Promise<IApiReturnObject>;

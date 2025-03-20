import { IApiReturnObject } from "..";
/**
 * # addGuestCustomer
 *
 * Add a not authenticated customer to the order
 *
 * @param firstName Customer First Name
 * @param lastName Customer Last Name
 * @param email Customer Email
 * @param acceptsMarketing
 * @param numOfRetries
 */
export declare function addGuestCustomer(firstName: string, lastName: string, email: string, acceptsMarketing?: boolean, numOfRetries?: number): Promise<IApiReturnObject>;

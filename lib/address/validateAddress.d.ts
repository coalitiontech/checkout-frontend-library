import { IApiReturnObject } from "..";
/**
 *
 * Validates the postal code coming from shipping / billing address
 *
 * @param firstName
 * @param lastName
 * @param addressLine1
 * @param addressLine2
 * @param city
 * @param postalCode
 * @param province
 * @param provinceCode
 * @param country
 * @param countryCode
 * @param businessName
 * @param phoneNumber
 * @param numOfRetries
 */
export declare function validateAddress(firstName: string, lastName: string, addressLine1: string, addressLine2: string, city: string, postalCode: string, province: string, provinceCode: string, country: string, countryCode: string, businessName?: string, phoneNumber?: string, numOfRetries?: number): Promise<IApiReturnObject>;

import { IApiReturnObject, IPatchOrderMetaDataRequest } from "..";
/**
 * # patchOrderMetaData
 *
 * patches meta data for the order
 *
 * @param {@link IPatchOrderMetaData} requestBody - Patch Order Meta Data Request Body.
 * @param {number} [numOfRetries=0] - Number of retries for some HTTP errors - Number from 0 to 5
 *
 * @returns {Promise<IApiReturnObject>} response
 */
export declare function patchOrderMetaData(requestBody: IPatchOrderMetaDataRequest, numOfRetries?: number): Promise<IApiReturnObject>;

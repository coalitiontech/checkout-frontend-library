import {
    checkApiResponse,
    fetchAPI,
    getApiOptions,
    getApiUrl,
    IApiReturnObject
} from 'src';
import {apiTypeKeys, apiTypes} from 'src/variables';

/**
 * # addGuestCustomer
 *
 * Add a not authenticated customer to the order
 *
 * @param firstName Customer First Name
 * @param lastName Customer Last Name
 * @param email Customer Email
 */
export async function addGuestCustomer(firstName: string, lastName: string, email: string): Promise<IApiReturnObject> {
    const {addGuestCustomer} = apiTypeKeys;
    const url = getApiUrl(addGuestCustomer);
    const options = getApiOptions(addGuestCustomer, {first_name: firstName, last_name: lastName, email_address: email});
    const fetchRes = await fetchAPI(url, options);
    const {keysToTest} = apiTypes.addGuestCustomer;
    return checkApiResponse(fetchRes, keysToTest);
}

import { IApiReturnObject, IInitializeOrderResponse, IEnvironment } from "..";
/**
 * # Initialize
 *
 * Initializes a checkout session using a variety of environment variables
 *
 * @param initData initial data from /init API call
 * @param shopIdentifier Identification for the shop in which the order is on
 * @param environment Set the environment where the library will be working on.
 */
export declare function initialize(initData: IInitializeOrderResponse, shopIdentifier: string, environment: IEnvironment): Promise<IApiReturnObject>;

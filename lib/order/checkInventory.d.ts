import { IApiReturnObject, IInventoryStage } from "..";
/**
 * # checkInventory
 *
 * Call to check inventory of the items in the order
 *
 * @param {'initial' | 'final'} stage
 * @param {number} numOfRetries
 *
 * @returns {Promise<IApiReturnObject>}
 *
 */
export declare function checkInventory(stage: IInventoryStage, numOfRetries?: number): Promise<IApiReturnObject>;

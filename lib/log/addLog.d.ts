import { IApiReturnObject } from "..";
/**
 * # addLog
 *
 * This make requests which contain messages that will be logged through the usual Checkout logging mechanisms.
 *
 * @param message Message to add to Logs - Maximum of 200 Characters
 * @param key Optional Key to add to NR counters
 * @param details stringify Json object to add to log context - Maximum of 700 Characters
 * @param numOfRetries
 *
 */
export declare function addLog(message: string, key?: string, details?: string, numOfRetries?: number): Promise<IApiReturnObject>;

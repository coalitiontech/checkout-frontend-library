import { IApiReturnObject, IPigiResponseType } from "..";
/**
 * ## sendUpdateMediaMatchAction
 *
 * To update media rules in PIGI this action can be sent along with a payload containing
 * the media condition and if it is a match.
 *
 * @param conditionText media rule condition.
 * @param matches true or false if condition is met.
 */
export declare function sendUpdateMediaMatchAction(conditionText: string, matches: boolean): IApiReturnObject;
/**
 * ## sendUpdateMediaMatchActionAsync
 *
 * To update media rules in PIGI this action can be sent along with a payload containing
 * the media condition and if it is a match.
 *
 * @param conditionText media rule condition.
 * @param matches true or false if condition is met.
 *
 * This method waits for a response back from PIGI before returning.
 */
export declare function sendUpdateMediaMatchActionAsync(conditionText: string, matches: boolean): Promise<IPigiResponseType>;

import { IApiReturnObject, IDispatchAppHookEventRequest } from "..";
/**
 * Dispatch App Hook Event
 *
 * @param requestBody Request body to dispatch app hook event
 * @param requestBody.uuid The unique identifier of the plugin that is expected to receive the app_hook event.
 * @param requestBody.hook The name of the app_hook event to send to the plugin.
 * @param requestBody.app_hook_data Data that will be provided as part of the app_hook plugin Event payload.
 */
export declare function dispatchAppHookEvent(requestBody: IDispatchAppHookEventRequest, numOfRetries?: number): Promise<IApiReturnObject>;

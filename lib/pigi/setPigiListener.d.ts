/**
 * ## setPigiListener
 * Set the PIGI iFrame id to be used for the actions
 * and the callback that will receive the responses from PIGI iFrame.
 *
 * @param iFrameId Provide the Pigi iFrame Id.
 * @param callback Provide the callback function to call when PIGI responses are received.
 *
 * @returns The function used to subscribe to pigi messages, needed to unsubscribe from listener
 */
export declare function setPigiListener(iFrameId: string, callback: EventListenerOrEventListenerObject): void;
/**
 * ## removePigiListener
 * Remove the callback that receives the responses from PIGI iFrame.
 *
 */
export declare function removePigiListener(): void;

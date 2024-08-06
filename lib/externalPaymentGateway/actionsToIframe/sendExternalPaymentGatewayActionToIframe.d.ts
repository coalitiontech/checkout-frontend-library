import { IExternalPaymentGateway, IExternalPaymentGatewayActionType } from "../..";
/**
 * This function sends a Action to the iFrame using postMessage
 */
export declare function sendExternalPaymentGatewayActionToIframe(paymentGateway: IExternalPaymentGateway, action: IExternalPaymentGatewayActionType): void;

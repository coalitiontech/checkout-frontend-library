import { IExternalPaymentGateway } from "..";
export declare function setExternalPaymentGatewayListener(paymentGateway: IExternalPaymentGateway, callback: EventListenerOrEventListenerObject): void;
/**
 * Remove the callback that receives the responses from external payment gateways
 */
export declare function removeExternalPaymentGatewayListener(): void;

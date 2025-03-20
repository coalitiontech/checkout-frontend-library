import { IExternalPaymentGateway } from "..";
/**
 * Get the contentWindow of the external payment gateway iFrame
 */
export declare function getExternalPaymentGatewayIframeWindow(externalPaymentGateway: IExternalPaymentGateway): WindowProxy | null;

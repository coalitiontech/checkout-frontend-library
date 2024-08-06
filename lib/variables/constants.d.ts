import { IApiErrors, IApiReturnObject, IApiTypeKeys, IApiTypes, IEnvironmentTypes, IEnvironmentUrls, IGeneralApiResponseParsingErrorType, IHttpStatusCode, ICheckInventoryStage, IMethods, IPigiActionTypes, IPigiResponseType, IAlternatePaymentMethodType, IExternalPaymentGatewayToParentActionTypes, IExternalPaymentGatewayToIframeActionTypes } from "..";
export declare const environmentTypes: IEnvironmentTypes;
export declare const environmentUrls: IEnvironmentUrls;
export declare const keysToTestFromResponse: {
    data: string;
    applicationState: string;
    initial_data: string;
    jwt_token: string;
    public_order_id: string;
    style_sheet: string;
};
export declare const appStateKeysToTest: string[];
export declare const environmentPath = "checkout";
export declare const generalApiResponseParsingErrorType: IGeneralApiResponseParsingErrorType;
export declare const methods: IMethods;
export declare const pigiActionTypes: IPigiActionTypes;
export declare const externalPaymentGatewayToParentActionTypes: IExternalPaymentGatewayToParentActionTypes;
export declare const externalPaymentGatewayToIframeActionTypes: IExternalPaymentGatewayToIframeActionTypes;
export declare const alternatePaymentMethodType: IAlternatePaymentMethodType;
export declare const checkInventoryStage: ICheckInventoryStage;
export declare const apiTypes: IApiTypes;
export declare const apiTypeKeys: IApiTypeKeys;
export declare const baseReturnObject: IApiReturnObject;
export declare const apiErrors: IApiErrors;
export declare const basePigiResponseType: IPigiResponseType;
export declare const httpStatusCode: IHttpStatusCode;

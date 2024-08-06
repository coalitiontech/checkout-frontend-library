import { IApiResponse } from "./apiInterfaces";
export interface IFetchError extends Error {
    status: number;
    statusText: string | undefined;
    body: string | IApiResponse | null | undefined;
    metaData: Record<string, unknown> | null | undefined;
}
export interface IErrorFormat {
    status: number;
    message: string;
}
export interface IApiErrors {
    general: IErrorFormat;
    noCsrf: IErrorFormat;
    noAppState: IErrorFormat;
    noResData: IErrorFormat;
    emptyAppState: IErrorFormat;
    emptyResData: IErrorFormat;
    noFieldInResponse: IErrorFormat;
    emptyFieldInResponse: IErrorFormat;
    errorsInResponse: IErrorFormat;
    emptyKeysToCheck: IErrorFormat;
    noPigiIframe: IErrorFormat;
}
export interface IGeneralApiResponseParsingErrorType {
    noField: string;
    emptyField: string;
}

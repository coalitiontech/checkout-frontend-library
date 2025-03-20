import { IApiResponse, IFetchError } from "..";
export declare class FetchError implements IFetchError {
    name: string;
    message: string;
    status: number;
    statusText: string | undefined;
    body: string | IApiResponse | null | undefined;
    metaData: Record<string, unknown> | null | undefined;
    constructor(status: number, msg: string, statusText?: string, body?: string | IApiResponse | null | undefined, metaData?: Record<string, unknown>);
}

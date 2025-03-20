import { IAddress, IBatchableRequest } from "..";
export declare const buildAddressBatchRequest: (address: IAddress, type: 'shipping' | 'billing') => IBatchableRequest | null;

/**
 * ## setEnvironment
 * This function set basic environment variables necessary
 *  to define the url and path to call Checkout APIs.
 *
 * @param type Use one of the keys on {@linkcode environmentTypes}.
 * Only 'production', 'staging' or 'local' are valid.
 *
 * @param path Optional - Use to define Checkout APIs path after the Url.
 * Used only for 'local' type.
 *
 * @param url Optional - Use to define API Url.
 * Used only for 'local' type.
 */
export declare function setEnvironment(type: string, path?: string, url?: string): void;

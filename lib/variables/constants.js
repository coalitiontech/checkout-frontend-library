"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpStatusCode = exports.basePigiResponseType = exports.apiErrors = exports.baseReturnObject = exports.apiTypeKeys = exports.apiTypes = exports.checkInventoryStage = exports.alternatePaymentMethodType = exports.externalPaymentGatewayToIframeActionTypes = exports.externalPaymentGatewayToParentActionTypes = exports.pigiActionTypes = exports.methods = exports.generalApiResponseParsingErrorType = exports.environmentPath = exports.appStateKeysToTest = exports.keysToTestFromResponse = exports.environmentUrls = exports.environmentTypes = void 0;
exports.environmentTypes = {
    production: 'production',
    staging: 'staging',
    local: 'local'
};
exports.environmentUrls = {
    production: 'https://api.boldcommerce.com',
    staging: 'https://api.staging.boldcommerce.com',
};
exports.keysToTestFromResponse = {
    data: 'data',
    applicationState: 'application_state',
    initial_data: 'initial_data',
    jwt_token: 'jwt_token',
    public_order_id: 'public_order_id',
    style_sheet: 'style_sheet',
};
exports.appStateKeysToTest = [exports.keysToTestFromResponse.data, exports.keysToTestFromResponse.applicationState];
exports.environmentPath = 'checkout';
exports.generalApiResponseParsingErrorType = {
    noField: 'noField',
    emptyField: 'emptyField',
};
exports.methods = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    PATCH: 'PATCH',
    DELETE: 'DELETE'
};
exports.pigiActionTypes = {
    PIGI_ADD_PAYMENT: 'PIGI_ADD_PAYMENT',
    PIGI_REFRESH_ORDER: 'PIGI_REFRESH_ORDER',
    PIGI_UPDATE_LANGUAGE: 'PIGI_UPDATE_LANGUAGE',
    PIGI_UPDATE_MEDIA_MATCH: 'PIGI_UPDATE_MEDIA_MATCH',
    PIGI_DISPLAY_ERROR_MESSAGE: 'PIGI_DISPLAY_ERROR_MESSAGE',
    PIGI_CLEAR_ERROR_MESSAGES: 'PIGI_CLEAR_ERROR_MESSAGES',
    PIGI_SELECT_PAYMENT_METHOD: 'PIGI_SELECT_PAYMENT_METHOD',
    PIGI_INITIALIZED: 'PIGI_INITIALIZED',
    PIGI_UPDATE_HEIGHT: 'PIGI_UPDATE_HEIGHT',
    PIGI_HANDLE_SCA: 'PIGI_HANDLE_SCA',
    PIGI_PAYMENT_ADDED: 'PIGI_PAYMENT_ADDED',
    PIGI_DISPLAY_IN_FULL_PAGE: 'PIGI_DISPLAY_IN_FULL_PAGE',
    PIGI_DISPLAY_IN_FULL_PAGE_DONE: 'PIGI_DISPLAY_IN_FULL_PAGE_DONE',
};
exports.externalPaymentGatewayToParentActionTypes = {
    EXTERNAL_PAYMENT_GATEWAY_ADD_PAYMENT: 'EXTERNAL_PAYMENT_GATEWAY_ADD_PAYMENT',
    EXTERNAL_PAYMENT_GATEWAY_REFRESH_ORDER: 'EXTERNAL_PAYMENT_GATEWAY_REFRESH_ORDER',
    EXTERNAL_PAYMENT_GATEWAY_UPDATE_MEDIA_MATCH: 'EXTERNAL_PAYMENT_GATEWAY_UPDATE_MEDIA_MATCH',
    EXTERNAL_PAYMENT_GATEWAY_INITIALIZED: 'EXTERNAL_PAYMENT_GATEWAY_INITIALIZED',
    EXTERNAL_PAYMENT_GATEWAY_UPDATE_HEIGHT: 'EXTERNAL_PAYMENT_GATEWAY_UPDATE_HEIGHT',
    EXTERNAL_PAYMENT_GATEWAY_TOKENIZING_IN_PROGRESS: 'EXTERNAL_PAYMENT_GATEWAY_TOKENIZING_IN_PROGRESS',
    EXTERNAL_PAYMENT_GATEWAY_TOKENIZING_COMPLETED: 'EXTERNAL_PAYMENT_GATEWAY_TOKENIZING_COMPLETED',
};
exports.externalPaymentGatewayToIframeActionTypes = {
    EXTERNAL_PAYMENT_GATEWAY_UPDATE_LANGUAGE: 'EXTERNAL_PAYMENT_GATEWAY_UPDATE_LANGUAGE',
    EXTERNAL_PAYMENT_GATEWAY_UPDATE_MEDIA_MATCH: 'EXTERNAL_PAYMENT_GATEWAY_UPDATE_MEDIA_MATCH',
    EXTERNAL_PAYMENT_GATEWAY_HANDLE_SCA: 'EXTERNAL_PAYMENT_GATEWAY_HANDLE_SCA',
    EXTERNAL_PAYMENT_GATEWAY_BILLING_ADDRESS_CHANGED: 'EXTERNAL_PAYMENT_GATEWAY_BILLING_ADDRESS_CHANGED',
    EXTERNAL_PAYMENT_GATEWAY_SHIPPING_ADDRESS_CHANGED: 'EXTERNAL_PAYMENT_GATEWAY_SHIPPING_ADDRESS_CHANGED',
    EXTERNAL_PAYMENT_GATEWAY_UPDATE_STATE: 'EXTERNAL_PAYMENT_GATEWAY_UPDATE_STATE',
    EXTERNAL_PAYMENT_GATEWAY_SET_CONFIG: 'EXTERNAL_PAYMENT_GATEWAY_SET_CONFIG',
};
exports.alternatePaymentMethodType = {
    STRIPE: 'stripe',
    PAYPAL: 'paypal',
    BRAINTREE_GOOGLE: 'braintree',
    BRAINTREE_APPLE: 'braintree-apple',
    PPCP_APPLE: 'paypal_commerce_platform-apple',
    PPCP: 'paypal_commerce_platform',
};
exports.checkInventoryStage = {
    initial: 'initial',
    final: 'final',
};
exports.apiTypes = {
    addGuestCustomer: {
        path: '/customer/guest',
        method: exports.methods.POST,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    addLineItem: {
        path: '/items',
        method: exports.methods.POST,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    updateCustomer: {
        path: '/customer',
        method: exports.methods.PUT,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    deleteCustomer: {
        path: '/customer',
        method: exports.methods.DELETE,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    deleteLineItem: {
        path: '/items',
        method: exports.methods.DELETE,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    validateEmail: {
        path: '/validate_email_address',
        method: exports.methods.GET,
        useJwt: true,
    },
    setShippingAddress: {
        path: '/addresses/shipping',
        method: exports.methods.POST,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    getShippingLines: {
        path: '/shipping_lines',
        method: exports.methods.GET,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    setBillingAddress: {
        path: '/addresses/billing',
        method: exports.methods.POST,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    validateAddress: {
        path: '/validate_address',
        method: exports.methods.GET,
        useJwt: true,
    },
    changeShippingLines: {
        path: '/shipping_lines',
        method: exports.methods.POST,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    setTaxes: {
        path: '/taxes',
        method: exports.methods.POST,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    addDiscount: {
        path: '/discounts',
        method: exports.methods.POST,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    deleteDiscount: {
        path: '/discounts',
        method: exports.methods.DELETE,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    getPaymentIframe: {
        path: '/payments/iframe',
        method: exports.methods.GET,
        useJwt: false,
    },
    cssStylingPaymentIframe: {
        path: '/payments/styles',
        method: exports.methods.POST,
        useJwt: true,
        keysToTest: [exports.keysToTestFromResponse.data, exports.keysToTestFromResponse.style_sheet]
    },
    processOrder: {
        path: '/process_order',
        method: exports.methods.POST,
        useJwt: true,
        keysToTest: [exports.keysToTestFromResponse.applicationState]
    },
    dispatchAppHookEvent: {
        path: '/app_hook',
        method: exports.methods.POST,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    getApplicationState: {
        path: '/refresh',
        method: exports.methods.GET,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    deleteBillingAddress: {
        path: '/addresses/billing',
        method: exports.methods.DELETE,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    deleteShippingAddress: {
        path: '/addresses/shipping',
        method: exports.methods.DELETE,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    updateShippingAddress: {
        path: '/addresses/shipping',
        method: exports.methods.PUT,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    updateBillingAddress: {
        path: '/addresses/billing',
        method: exports.methods.PUT,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    updateItem: {
        path: '/items',
        method: exports.methods.PUT,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest],
    },
    checkInventory: {
        path: '/check_inventory',
        method: exports.methods.GET,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest],
    },
    validateDiscount: {
        path: '/validate_discount_code',
        method: exports.methods.GET,
        useJwt: true,
    },
    getPaymentList: {
        path: '/payments',
        method: exports.methods.GET,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    addPayment: {
        path: '/payments',
        method: exports.methods.POST,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    updatePayment: {
        path: '/payments',
        method: exports.methods.PUT,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    deletePayment: {
        path: '/payments',
        method: exports.methods.DELETE,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    deleteGiftCardPayment: {
        path: '/payments/gift_card',
        method: exports.methods.DELETE,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    patchOrderMetaData: {
        path: '/meta_data',
        method: exports.methods.PATCH,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    batchRequest: {
        path: '/batch',
        method: exports.methods.POST,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    addLog: {
        path: '/log',
        method: exports.methods.POST,
        useJwt: true,
        keysToTest: [exports.keysToTestFromResponse.data]
    },
    walletPayCreateOrder: {
        path: '/wallet_pay/create_order',
        method: exports.methods.POST,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    walletPayOnShipping: {
        path: '/wallet_pay/on_shipping',
        method: exports.methods.POST,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
    walletPayOnApprove: {
        path: '/wallet_pay/on_approve',
        method: exports.methods.POST,
        useJwt: true,
        keysToTest: [...exports.appStateKeysToTest]
    },
};
exports.apiTypeKeys = {
    addGuestCustomer: 'addGuestCustomer',
    addLineItem: 'addLineItem',
    updateCustomer: 'updateCustomer',
    deleteCustomer: 'deleteCustomer',
    deleteLineItem: 'deleteLineItem',
    validateEmail: 'validateEmail',
    setShippingAddress: 'setShippingAddress',
    setBillingAddress: 'setBillingAddress',
    validateAddress: 'validateAddress',
    getShippingLines: 'getShippingLines',
    changeShippingLines: 'changeShippingLines',
    setTaxes: 'setTaxes',
    addDiscount: 'addDiscount',
    deleteDiscount: 'deleteDiscount',
    validateDiscount: 'validateDiscount',
    getPaymentIframe: 'getPaymentIframe',
    cssStylingPaymentIframe: 'cssStylingPaymentIframe',
    processOrder: 'processOrder',
    dispatchAppHookEvent: 'dispatchAppHookEvent',
    getApplicationState: 'getApplicationState',
    deleteBillingAddress: 'deleteBillingAddress',
    deleteShippingAddress: 'deleteShippingAddress',
    updateShippingAddress: 'updateShippingAddress',
    updateBillingAddress: 'updateBillingAddress',
    updateItem: 'updateItem',
    checkInventory: 'checkInventory',
    getPaymentList: 'getPaymentList',
    addPayment: 'addPayment',
    updatePayment: 'updatePayment',
    deletePayment: 'deletePayment',
    deleteGiftCardPayment: 'deleteGiftCardPayment',
    patchOrderMetaData: 'patchOrderMetaData',
    batchRequest: 'batchRequest',
    addLog: 'addLog',
    walletPayCreateOrder: 'walletPayCreateOrder',
    walletPayOnShipping: 'walletPayOnShipping',
    walletPayOnApprove: 'walletPayOnApprove',
};
exports.baseReturnObject = {
    status: 0,
    success: false,
    error: null,
    response: null
};
exports.apiErrors = {
    general: { status: 1000, message: 'General error thrown' },
    noCsrf: { status: 1001, message: 'CSRF Token not found' },
    noPigiIframe: { status: 1002, message: 'PIGI iframe not found or empty' },
    /*
     * API RESPONSE - checkApiResponse function ERRORS
     *
     * - Application state errors being 110? status code
     * - Data errors starting being 120? status code
     * - Generic field errors being 190? code
     */
    errorsInResponse: { status: 1900, message: 'Errors found while parsing the response object' },
    noFieldInResponse: { status: 1901, message: '{{field}} not found in response' },
    emptyFieldInResponse: { status: 1092, message: '{{field}} is empty in response' },
    emptyKeysToCheck: { status: 1903, message: 'No keys to check in response' },
    noAppState: { status: 1100, message: 'Application state not found in response' },
    emptyAppState: { status: 1101, message: 'Application state is empty in response' },
    noResData: { status: 1200, message: 'Data not found in response' },
    emptyResData: { status: 1201, message: 'Data is empty in response' },
};
exports.basePigiResponseType = {
    responseType: '',
    payload: {
        success: false,
        height: 0
    }
};
exports.httpStatusCode = {
    OK: 200,
    ACCEPTED: 202,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    REQUEST_TIMEOUT: 408,
    UNPROCESSABLE_ENTITY: 422,
    TOO_MANY_REQUEST: 429,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    ORDER_LOCKED: 530,
    ORDER_TIMEOUT_LOCK: 544
};

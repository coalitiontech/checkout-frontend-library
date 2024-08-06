"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retryErrorCodeWaitTime = exports.retryErrorCodeList = exports.orderInitialData = exports.applicationState = exports.supportedLanguages = exports.generalSettings = exports.countryInfo = exports.display_currency = exports.currency = exports.shipping = exports.order_meta_data = exports.payments = exports.fees = exports.discounts = exports.taxes = exports.line_items = exports.addresses = exports.billingAddress = exports.shippingAddress = exports.customer = exports.pigi = exports.auth = exports.environment = void 0;
const src_1 = require("..");
exports.environment = {
    type: src_1.environmentTypes.production,
    url: src_1.environmentUrls.production,
    path: src_1.environmentPath
};
exports.auth = {
    shopIdentifier: '',
    publicOrderId: '',
    csrfToken: '',
    jwtToken: ''
};
exports.pigi = {
    iFrameId: ''
};
exports.customer = {
    platform_id: '',
    public_id: '',
    first_name: '',
    last_name: '',
    email_address: '',
    accepts_marketing: false,
    saved_addresses: []
};
exports.shippingAddress = {
    first_name: '',
    last_name: '',
    address_line_1: '',
    address_line_2: '',
    country: '',
    city: '',
    province: '',
    country_code: '',
    province_code: '',
    postal_code: '',
    business_name: '',
    phone_number: ''
};
exports.billingAddress = {
    first_name: '',
    last_name: '',
    address_line_1: '',
    address_line_2: '',
    country: '',
    city: '',
    province: '',
    country_code: '',
    province_code: '',
    postal_code: '',
    business_name: '',
    phone_number: ''
};
exports.addresses = {
    shipping: exports.shippingAddress,
    billing: exports.billingAddress
};
exports.line_items = [];
exports.taxes = [];
exports.discounts = [];
exports.fees = [];
exports.payments = [];
exports.order_meta_data = {
    cart_parameters: {
        key: ''
    },
    note_attributes: {
        key: ''
    },
    notes: '',
    tags: []
};
exports.shipping = {
    selected_shipping: {
        id: '',
        description: '',
        amount: 0
    },
    available_shipping_lines: [],
    taxes: [],
    discounts: []
};
exports.currency = {
    iso_code: 'cad',
    iso_numeric_code: 124,
    symbol: '$',
    format: '${amount}',
    has_decimal: false,
    show_iso_code: true
};
exports.display_currency = null;
exports.countryInfo = {
    iso_code: 'CA',
    name: 'Canada',
    show_province: false,
    province_label: 'Province',
    show_postal_code: false,
    provinces: [],
    valid_for_shipping: false,
    valid_for_billing: false
};
exports.generalSettings = {
    checkout_process: {
        company_name_option: 'required',
        phone_number_required: false,
        accepts_marketing_checkbox_option: 'checked',
        tax_exempt_checkbox_enabled: undefined,
        tax_shipping: true,
        batch_requests: false
    },
    address_autocomplete: {
        provider: null,
        api_key: null
    }
};
exports.supportedLanguages = {
    id: 0,
    shop_id: 0,
    iso_language: '',
    language_name: '',
    language_blob: '',
    is_default: true,
    out_of_date: 0,
    enabled: 1,
    source: null,
    created_at: '',
    updated_at: '',
    deleted_at: null,
    name: '',
    shop_language_id: 0
};
exports.applicationState = {
    customer: exports.customer,
    addresses: exports.addresses,
    line_items: exports.line_items,
    taxes: exports.taxes,
    discounts: exports.discounts,
    payments: exports.payments,
    order_meta_data: exports.order_meta_data,
    shipping: exports.shipping,
    order_total: 0,
    order_balance: 0,
    resumable_link: '',
    link_to_cart: null,
    currency: exports.currency,
    display_currency: exports.display_currency,
    display_exchange_rate: null,
    created_via: '',
    is_processed: false,
    fees: exports.fees,
};
exports.orderInitialData = {
    shop_name: '',
    country_info: [exports.countryInfo],
    general_settings: exports.generalSettings,
    supported_languages: [exports.supportedLanguages],
    alternative_payment_methods: [],
    external_payment_gateways: [],
    life_elements: [],
    flow_settings: {},
    requires_shipping: true,
};
exports.retryErrorCodeList = [
    src_1.httpStatusCode.REQUEST_TIMEOUT,
    src_1.httpStatusCode.TOO_MANY_REQUEST,
    src_1.httpStatusCode.SERVICE_UNAVAILABLE,
    src_1.httpStatusCode.GATEWAY_TIMEOUT,
    src_1.httpStatusCode.ORDER_LOCKED,
    src_1.httpStatusCode.ORDER_TIMEOUT_LOCK,
];
exports.retryErrorCodeWaitTime = [300, 300, 600, 900, 1500];

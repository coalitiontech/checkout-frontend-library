import {
    IAddress,
    IAddressType,
    IApplicationState,
    IAvailableShippingLine,
    ICustomer,
    IDiscount,
    IFee,
    IInitializeOrderResponse,
    ILineItem,
    IOrderMetaData,
    IPayment,
    IProductData,
    IShipping,
    IShippingLine,
    ITax,
    IOrderInitialData,
    ICountryInformation,
    IProvince,
    ICssRule,
    IMediaRule,
    ICssStylingPaymentIframeRequest
} from 'src';

export const shippingAddressMock: IAddress = {
    id: undefined,
    first_name: 'John',
    last_name: 'Doe',
    address_line_1: '123 Any St',
    address_line_2: 'Line 2',
    country: 'CA',
    city: 'Winnipeg',
    province: 'MB',
    country_code: 'CA',
    province_code: 'MB',
    postal_code: 'R3Y0L6',
    business_name: 'Some Business Name',
    phone_number: '1231231234'
};

export const billingAddressMock: IAddress = {
    id: undefined,
    first_name: 'Jane',
    last_name: 'Doe',
    address_line_1: '456 Any St',
    address_line_2: 'Line 2',
    country: 'CA',
    city: 'Winnipeg',
    province: 'MB',
    country_code: 'CA',
    province_code: 'MB',
    postal_code: 'R3Y0L6',
    business_name: 'Some Business Name',
    phone_number: '3453453456'
};

export const emptyAddressMock: IAddress = {
    id: undefined,
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

export const customerMock: ICustomer = {
    platform_id: 'test_platform_id',
    public_id: 'test_public_id',
    first_name: 'John',
    last_name: 'Doe',
    email_address: 'john.doe@example.com',
    accepts_marketing: false,
    saved_addresses: [{
        first_name: 'John',
        last_name: 'Doe',
        address_line_1: '123 Any St',
        address_line_2: 'Line 2',
        country: 'CA',
        city: 'Winnipeg',
        province: 'MB',
        country_code: 'CA',
        province_code: 'MB',
        postal_code: 'R3Y0L6',
        business_name: 'Some Business Name',
        phone_number: '1231231234'
    }]
};

export const emptyCustomerMock: ICustomer = {
    platform_id: '',
    public_id: '',
    first_name: '',
    last_name: '',
    email_address: '',
    accepts_marketing: false,
    saved_addresses: []
};

export const taxMock: ITax = {
    value: 0,
    name: 'test_tax_name',
    is_included: true
};

export const taxesArrayMock: Array<ITax> = [
    {
        value: 0,
        name: 'test_tax_name_included',
        is_included: true
    },
    {
        value: 12.34,
        name: 'test_tax_name',
        is_included: false
    },
];

export const discountMock: IDiscount = {
    code: 'test_code',
    text: 'test text',
    value: 1,
    valid: true
};

export const feeMock: IFee = {
    amount: 1,
    name: 'test fee'
};

export const productData: IProductData = {
    id: 'product_test_id',
    title: 'Product Title',
    image_url: '',
    properties: ['test'],
    description: 'Product Description',
    quantity: 1,
    price: 1000,
    total_price: 1000,
    visible: true,
    line_item_key: 'some_test_item_key',
    barcode: '',
    compare_at_price: 900,
    weight: 1,
    weight_unit: 'kg',
    product_id: 'test_product_id',
    variant_id: 'test_variant_id',
    requires_shipping: true,
    sku: 'test_sku',
    taxable: true,
    tags: 'test_tag',
    vendor: ''
};

export const paymentMock: IPayment = {
    id: 'test_id',
    gateway_public_id: 'test_gateway_public_id',
    amount: 1000,
    currency: 'CAD',
    type: 'test_type',
    display_string: 'test_display_string',
    token: 'test_token',
    retain: true,
};

export const orderMetaDataMock: IOrderMetaData ={
    cart_parameters: {key: 'test_key'},
    note_attributes: {key: 'test_key'},
    notes: 'test notes',
    tags: ['test_tag_1', 'test_tag_2']
};

export const selectShippingLineMock: IShippingLine = {
    id: 'test_select_shipping_line_id',
    description: 'Test Description',
    amount: 100
};

export const availableShippingLineMock: IAvailableShippingLine = {
    id: 1,
    line: selectShippingLineMock
};

export const shippingMock: IShipping = {
    selected_shipping: selectShippingLineMock,
    available_shipping_lines: [selectShippingLineMock],
    taxes: [taxMock],
    discounts: [discountMock]
};

export const lineItemMock: ILineItem = {
    product_data: productData,
    taxes: [taxMock, taxMock, taxMock],
    fees: [feeMock, feeMock, feeMock],
    discounts: [discountMock]
};

export const addressesMock: IAddressType = {
    shipping: shippingAddressMock,
    billing: billingAddressMock
};

export const applicationStateMock: IApplicationState = {
    customer: customerMock,
    addresses: addressesMock,
    line_items: [lineItemMock],
    taxes: [taxMock, taxMock, taxMock],
    discounts: [discountMock],
    payments: [paymentMock],
    order_meta_data: orderMetaDataMock,
    shipping: shippingMock,
    order_total: 10000
};

export const selectShippingLineArrayMock: Array<IShippingLine> = [
    {
        id: '1',
        description: 'First shipping line Option',
        amount: 999
    }, {
        id: '2',
        description: 'Second shipping line Option',
        amount: 1500
    }
];

export const provinceMock: IProvince = {
    iso_code: 'test_iso_code',
    name: 'test_name',
    valid_for_shipping: true,
    valid_for_billing: true,
};

export const countryInformationMock: ICountryInformation = {
    iso_code: 'test_iso_code',
    name: 'test_name',
    show_province: true,
    province_label: 'test_province_label',
    show_postal_code: true,
    provinces: [provinceMock],
    valid_for_shipping: true,
    valid_for_billing: true,
};

export const orderInitialDataMock: IOrderInitialData = {
    shop_name: 'test_shop_name',
    country_information: [countryInformationMock],
    supported_languages: ['English'],
    general_settings: {
        checkout_process: {
            company_name_option: 'required',
            phone_number_required: false,
            accepts_marketing_checkbox_option: 'checked'
        },
        address_autocomplete: {
            provider: null,
            api_key: null
        }
    }
};

export const cssRuleMock: ICssRule = {
    cssText: '.ToggleField { color:red; }'
};

export const mediaRuleMock: IMediaRule = {
    conditionText: 'screen and (max-height: 600px)',
    cssRules: [cssRuleMock, cssRuleMock]
};

export const cssStylingPaymentIframeRequestMock: ICssStylingPaymentIframeRequest = {
    css_rules: [cssRuleMock, cssRuleMock],
    media_rules: [mediaRuleMock]
};

export const initializeOrderResponseMock: IInitializeOrderResponse = {
    initial_data: orderInitialDataMock,
    application_state: applicationStateMock,
    jwt_token: 'test_jwt_token',
    public_order_id: 'test_public_order_id',
};

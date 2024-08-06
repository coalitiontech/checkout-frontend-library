"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setOrderInitialData = void 0;
const variables_1 = require("../variables");
function setOrderInitialData({ shop_name, country_info, supported_languages, general_settings, alternative_payment_methods }) {
    variables_1.orderInitialData.general_settings = general_settings;
    variables_1.orderInitialData.shop_name = shop_name;
    variables_1.orderInitialData.country_info = country_info;
    variables_1.orderInitialData.supported_languages = supported_languages;
    variables_1.orderInitialData.alternative_payment_methods = alternative_payment_methods;
}
exports.setOrderInitialData = setOrderInitialData;

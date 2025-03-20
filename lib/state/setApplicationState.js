"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setApplicationState = void 0;
const state_1 = require("./");
const variables_1 = require("../variables");
const setDisplayCurrency_1 = require("./setDisplayCurrency");
function setApplicationState({ customer, addresses, line_items, taxes, discounts, payments, order_meta_data, shipping, order_total, order_balance, resumable_link, created_via, is_processed, fees, currency, display_currency, display_exchange_rate, }) {
    (0, state_1.setCustomer)(customer);
    (0, state_1.setAddresses)(addresses);
    (0, state_1.setLineItems)(line_items);
    (0, state_1.setTaxes)(taxes);
    (0, state_1.setDiscounts)(discounts);
    (0, state_1.setPayments)(payments);
    (0, state_1.setOrderMetaData)(order_meta_data);
    (0, state_1.setShipping)(shipping);
    (0, state_1.setFees)(fees);
    (0, state_1.setCurrency)(currency);
    if (display_currency) {
        (0, setDisplayCurrency_1.setDisplayCurrency)(display_currency);
        variables_1.applicationState.display_exchange_rate = display_exchange_rate;
    }
    variables_1.applicationState.order_total = order_total;
    variables_1.applicationState.order_balance = order_balance;
    variables_1.applicationState.resumable_link = resumable_link;
    variables_1.applicationState.created_via = created_via;
    variables_1.applicationState.is_processed = is_processed;
}
exports.setApplicationState = setApplicationState;

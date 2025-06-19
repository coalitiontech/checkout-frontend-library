"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = void 0;
const src_1 = require("..");
/**
 * # Initialize
 *
 * Initializes a checkout session using a variety of environment variables
 *
 * @param initData initial data from /init API call
 * @param shopIdentifier Identification for the shop in which the order is on
 * @param environment Set the environment where the library will be working on.
 */
function initialize(initData, shopIdentifier, environment) {
    return __awaiter(this, void 0, void 0, function* () {
        const { jwt_token: jwt, public_order_id: publicOrderId } = initData;
        const returnObject = Object.assign({}, src_1.baseReturnObject);
        returnObject.success = true;
        returnObject.response = initData;
        let keysToCheck = [src_1.keysToTestFromResponse.applicationState, src_1.keysToTestFromResponse.initial_data, src_1.keysToTestFromResponse.jwt_token, src_1.keysToTestFromResponse.public_order_id];
        if (!('initial_data' in initData)) {
            keysToCheck = [src_1.keysToTestFromResponse.jwt_token, src_1.keysToTestFromResponse.public_order_id];
        }
        const returnValue = (0, src_1.checkApiResponse)(returnObject, keysToCheck);
        if (!returnValue.success) {
            return returnValue;
        }
        (0, src_1.setJwtToken)(jwt);
        (0, src_1.setPublicOrderId)(publicOrderId);
        (0, src_1.setShopIdentifier)(shopIdentifier);
        (0, src_1.setEnvironment)(environment.type, environment.path, environment.url);
        return returnValue;
    });
}
exports.initialize = initialize;

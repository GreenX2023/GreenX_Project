"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var product_schema_1 = require("../schema/product.schema");
var type_graphql_1 = require("type-graphql");
var product_service_1 = require("../greenxServices/product.service");
var product = new product_service_1["default"]();
// Describe each resolver comments in Jdoc or Ndoc or other standard format (find out standard format)
var ProductResolver = /** @class */ (function () {
    function ProductResolver() {
    }
    ProductResolver.prototype.myProduct = function () {
        return {
            _id: "123",
            name: "rice",
            price: 321
        };
    };
    ProductResolver.prototype.getAllProducts = function () {
        return product.getAllProducts();
    };
    ProductResolver.prototype.getProductById = function (productID) {
        return product.getProductById(productID);
    };
    ProductResolver.prototype.getProductByName = function (productName) {
        return product.getProductByName(productName);
    };
    ProductResolver.prototype.createProduct = function (input) {
        return product.createProduct(input);
    };
    __decorate([
        (0, type_graphql_1.Query)(function () { return product_schema_1.Product; })
    ], ProductResolver.prototype, "myProduct");
    __decorate([
        (0, type_graphql_1.Query)(function () { return [product_schema_1.Product]; })
    ], ProductResolver.prototype, "getAllProducts");
    __decorate([
        (0, type_graphql_1.Query)(function () { return product_schema_1.Product; }),
        __param(0, (0, type_graphql_1.Arg)('productID'))
    ], ProductResolver.prototype, "getProductById");
    __decorate([
        (0, type_graphql_1.Query)(function () { return product_schema_1.Product; }),
        __param(0, (0, type_graphql_1.Arg)('productName'))
    ], ProductResolver.prototype, "getProductByName");
    __decorate([
        (0, type_graphql_1.Mutation)(function () { return product_schema_1.Product; }),
        __param(0, (0, type_graphql_1.Arg)('input'))
    ], ProductResolver.prototype, "createProduct");
    ProductResolver = __decorate([
        (0, type_graphql_1.Resolver)()
    ], ProductResolver);
    return ProductResolver;
}());
exports["default"] = ProductResolver;

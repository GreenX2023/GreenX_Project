"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateProductInput = exports.Product = void 0;
var type_graphql_1 = require("type-graphql");
var Product = /** @class */ (function () {
    function Product() {
    }
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], Product.prototype, "_id");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], Product.prototype, "name");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], Product.prototype, "description");
    __decorate([
        (0, type_graphql_1.Field)(function () { return Number; })
    ], Product.prototype, "price");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], Product.prototype, "quantity");
    __decorate([
        (0, type_graphql_1.Field)(function () { return [String]; })
    ], Product.prototype, "images");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], Product.prototype, "location");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], Product.prototype, "sellerID");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], Product.prototype, "categoryID");
    Product = __decorate([
        (0, type_graphql_1.ObjectType)()
    ], Product);
    return Product;
}());
exports.Product = Product;
var CreateProductInput = /** @class */ (function () {
    function CreateProductInput() {
    }
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], CreateProductInput.prototype, "name");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], CreateProductInput.prototype, "description");
    __decorate([
        (0, type_graphql_1.Field)(function () { return Number; })
    ], CreateProductInput.prototype, "price");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], CreateProductInput.prototype, "quantity");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], CreateProductInput.prototype, "location");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], CreateProductInput.prototype, "sellerID");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], CreateProductInput.prototype, "categoryID");
    CreateProductInput = __decorate([
        (0, type_graphql_1.InputType)()
    ], CreateProductInput);
    return CreateProductInput;
}());
exports.CreateProductInput = CreateProductInput;

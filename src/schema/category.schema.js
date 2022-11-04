"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var type_graphql_1 = require("type-graphql");
var product_schema_1 = require("./product.schema");
var Category = /** @class */ (function () {
    function Category() {
    }
    Category_1 = Category;
    var Category_1;
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], Category.prototype, "_id");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], Category.prototype, "name");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], Category.prototype, "description");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], Category.prototype, "image");
    __decorate([
        (0, type_graphql_1.Field)(function () { return [product_schema_1.Product]; })
    ], Category.prototype, "productList");
    __decorate([
        (0, type_graphql_1.Field)(function () { return [Category_1]; })
    ], Category.prototype, "subcategoryList");
    Category = Category_1 = __decorate([
        (0, type_graphql_1.ObjectType)()
    ], Category);
    return Category;
}());
exports["default"] = Category;

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
var category_schema_1 = require("../schema/category.schema");
var type_graphql_1 = require("type-graphql");
var category_service_1 = require("../greenxServices/category.service");
// import { createCategory,getAllCategory } from "../greenxServices/category.service";
var category = new category_service_1["default"]();
var CategoryResolver = /** @class */ (function () {
    function CategoryResolver() {
    }
    /**
    * @description gets a dummy object for testing a category resolver
    *
    * @returns {{_id: string, name: string, productList: string[]}} dummy Category Details
    */
    CategoryResolver.prototype.myCategory = function () {
        return {
            _id: "123",
            name: "fruits",
            productList: [{
                    name: "apple",
                    price: 982
                }]
        };
    };
    CategoryResolver.prototype.getAllCategory = function () {
        return category.getAllCategory(); //populate not working
    };
    CategoryResolver.prototype.createCategory = function (name, parentCat) {
        return category.createCategory(name, parentCat);
    };
    __decorate([
        (0, type_graphql_1.Query)(function () { return category_schema_1["default"]; })
    ], CategoryResolver.prototype, "myCategory");
    __decorate([
        (0, type_graphql_1.Query)(function () { return [category_schema_1["default"]]; })
    ], CategoryResolver.prototype, "getAllCategory");
    __decorate([
        (0, type_graphql_1.Mutation)(function () { return category_schema_1["default"]; }),
        __param(0, (0, type_graphql_1.Arg)('name')),
        __param(1, (0, type_graphql_1.Arg)('parentCat'))
    ], CategoryResolver.prototype, "createCategory");
    CategoryResolver = __decorate([
        (0, type_graphql_1.Resolver)()
    ], CategoryResolver);
    return CategoryResolver;
}());
exports["default"] = CategoryResolver;

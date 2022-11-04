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
var user_schema_1 = require("../schema/user.schema");
var type_graphql_1 = require("type-graphql");
var product_schema_1 = require("../schema/product.schema");
var user_service_1 = require("../greenxServices/user.service");
// import UserService from "../greenxServices/user.service";
// const {UserModel} = require('../models/User.model')
var user = new user_service_1["default"]();
var UserResolver = /** @class */ (function () {
    function UserResolver() {
    }
    UserResolver.prototype.createUser = function (input) {
        return user.createUser(input);
    };
    UserResolver.prototype.updateBookmarksAdd = function (userId, productId) {
        return user.updateBookmarksAdd(userId, productId);
    };
    UserResolver.prototype.updateBookmarksRemove = function (userId, productId) {
        return user.updateBookmarksRemove(userId, productId);
    };
    UserResolver.prototype.me = function () {
        return {
            _id: "123",
            name: "Austin",
            email: "a@gmail.com"
        };
    };
    UserResolver.prototype.getAllUsers = function () {
        return user.getAllUsers();
    };
    UserResolver.prototype.getUserById = function (userId) {
        return user.getUserById(userId);
    };
    UserResolver.prototype.getSellerProducts = function (userId) {
        return user.getSellerProducts(userId);
    };
    UserResolver.prototype.getBookmarksForUser = function (userId) {
        return user.getBookmarksForUser(userId);
    };
    __decorate([
        (0, type_graphql_1.Mutation)(function () { return user_schema_1["default"]; }),
        __param(0, (0, type_graphql_1.Arg)('input'))
    ], UserResolver.prototype, "createUser");
    __decorate([
        (0, type_graphql_1.Mutation)(function () { return user_schema_1["default"]; }),
        __param(0, (0, type_graphql_1.Arg)('userId')),
        __param(1, (0, type_graphql_1.Arg)('productId'))
    ], UserResolver.prototype, "updateBookmarksAdd");
    __decorate([
        (0, type_graphql_1.Mutation)(function () { return user_schema_1["default"]; }),
        __param(0, (0, type_graphql_1.Arg)('userId')),
        __param(1, (0, type_graphql_1.Arg)('productId'))
    ], UserResolver.prototype, "updateBookmarksRemove");
    __decorate([
        (0, type_graphql_1.Query)(function () { return user_schema_1["default"]; })
    ], UserResolver.prototype, "me");
    __decorate([
        (0, type_graphql_1.Query)(function () { return [user_schema_1["default"]]; })
    ], UserResolver.prototype, "getAllUsers");
    __decorate([
        (0, type_graphql_1.Query)(function () { return user_schema_1["default"]; }),
        __param(0, (0, type_graphql_1.Arg)('userId'))
    ], UserResolver.prototype, "getUserById");
    __decorate([
        (0, type_graphql_1.Query)(function () { return [product_schema_1.Product]; }),
        __param(0, (0, type_graphql_1.Arg)('userId'))
    ], UserResolver.prototype, "getSellerProducts");
    __decorate([
        (0, type_graphql_1.Query)(function () { return [product_schema_1.Product]; }),
        __param(0, (0, type_graphql_1.Arg)('userId'))
    ], UserResolver.prototype, "getBookmarksForUser");
    UserResolver = __decorate([
        (0, type_graphql_1.Resolver)()
    ], UserResolver);
    return UserResolver;
}());
exports["default"] = UserResolver;

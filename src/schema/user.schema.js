"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateUserInput = void 0;
var type_graphql_1 = require("type-graphql");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], User.prototype, "_id");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], User.prototype, "role");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], User.prototype, "name");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], User.prototype, "email");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], User.prototype, "password");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], User.prototype, "contactnum");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], User.prototype, "address");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], User.prototype, "bio");
    __decorate([
        (0, type_graphql_1.Field)(function () { return [String]; })
    ], User.prototype, "products");
    __decorate([
        (0, type_graphql_1.Field)(function () { return [String]; })
    ], User.prototype, "bookmarks");
    User = __decorate([
        (0, type_graphql_1.ObjectType)()
    ], User);
    return User;
}());
exports["default"] = User;
var CreateUserInput = /** @class */ (function () {
    function CreateUserInput() {
    }
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], CreateUserInput.prototype, "role");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], CreateUserInput.prototype, "name");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], CreateUserInput.prototype, "email");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], CreateUserInput.prototype, "password");
    __decorate([
        (0, type_graphql_1.Field)(function () { return String; })
    ], CreateUserInput.prototype, "contactnum");
    CreateUserInput = __decorate([
        (0, type_graphql_1.InputType)()
    ], CreateUserInput);
    return CreateUserInput;
}());
exports.CreateUserInput = CreateUserInput;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserInput = exports.User = void 0;
const type_graphql_1 = require("type-graphql");
const product_schema_1 = require("./product.schema");
let Location = class Location {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Location.prototype, "type", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Number]),
    __metadata("design:type", Array)
], Location.prototype, "coordinates", void 0);
Location = __decorate([
    (0, type_graphql_1.ObjectType)()
], Location);
let User = class User {
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "contactnum", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "bio", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [product_schema_1.Product], { nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "products", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [product_schema_1.Product], { nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "bookmarks", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Location, { nullable: true }),
    __metadata("design:type", Location)
], User.prototype, "location", void 0);
User = __decorate([
    (0, type_graphql_1.ObjectType)()
], User);
exports.User = User;
let LocationInput = class LocationInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], LocationInput.prototype, "type", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Number]),
    __metadata("design:type", Array)
], LocationInput.prototype, "coordinates", void 0);
LocationInput = __decorate([
    (0, type_graphql_1.InputType)()
], LocationInput);
let CreateUserInput = class CreateUserInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "contactnum", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => LocationInput, { nullable: true }),
    __metadata("design:type", LocationInput)
], CreateUserInput.prototype, "location", void 0);
CreateUserInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateUserInput);
exports.CreateUserInput = CreateUserInput;
//# sourceMappingURL=user.schema.js.map
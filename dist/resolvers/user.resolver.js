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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = __importDefault(require("../schema/user.schema"));
const user_schema_2 = require("../schema/user.schema");
const type_graphql_1 = require("type-graphql");
const product_schema_1 = require("../schema/product.schema");
const user_service_1 = __importDefault(require("../greenxServices/user.service"));
// import UserService from "../greenxServices/user.service";
// const {UserModel} = require('../models/User.model')
let user = new user_service_1.default();
let UserResolver = class UserResolver {
    createUser(input) {
        return user.createUser(input);
    }
    updateBookmarksAdd(userId, productId) {
        return user.updateBookmarksAdd(userId, productId);
    }
    updateBookmarksRemove(userId, productId) {
        return user.updateBookmarksRemove(userId, productId);
    }
    me() {
        return {
            _id: "123",
            name: "Austin",
            email: "a@gmail.com"
        };
    }
    getAllUsers() {
        return user.getAllUsers();
    }
    getUserById(userId) {
        return user.getUserById(userId);
    }
    getSellerProducts(userId) {
        return user.getSellerProducts(userId);
    }
    getBookmarksForUser(userId) {
        return user.getBookmarksForUser(userId);
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => user_schema_1.default),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_schema_2.CreateUserInput]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "createUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => user_schema_1.default),
    __param(0, (0, type_graphql_1.Arg)('userId')),
    __param(1, (0, type_graphql_1.Arg)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String,
        String]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "updateBookmarksAdd", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => user_schema_1.default),
    __param(0, (0, type_graphql_1.Arg)('userId')),
    __param(1, (0, type_graphql_1.Arg)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String,
        String]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "updateBookmarksRemove", null);
__decorate([
    (0, type_graphql_1.Query)(() => user_schema_1.default),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "me", null);
__decorate([
    (0, type_graphql_1.Query)(() => [user_schema_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "getAllUsers", null);
__decorate([
    (0, type_graphql_1.Query)(() => user_schema_1.default),
    __param(0, (0, type_graphql_1.Arg)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "getUserById", null);
__decorate([
    (0, type_graphql_1.Query)(() => [product_schema_1.Product]),
    __param(0, (0, type_graphql_1.Arg)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "getSellerProducts", null);
__decorate([
    (0, type_graphql_1.Query)(() => [product_schema_1.Product]),
    __param(0, (0, type_graphql_1.Arg)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "getBookmarksForUser", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
exports.default = UserResolver;
//# sourceMappingURL=user.resolver.js.map
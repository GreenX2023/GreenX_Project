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
const product_schema_1 = require("../schema/product.schema");
const type_graphql_1 = require("type-graphql");
const product_service_1 = __importDefault(require("../greenxServices/product.service"));
let product = new product_service_1.default();
let ProductResolver = class ProductResolver {
    getAllProducts() {
        return product.getAllProducts();
    }
    getProductById(productID) {
        return product.getProductById(productID);
    }
    getProductByName(productName) {
        return product.getProductByName(productName);
    }
    createProduct(input) {
        return product.createProduct(input);
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [product_schema_1.Product]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "getAllProducts", null);
__decorate([
    (0, type_graphql_1.Query)(() => product_schema_1.Product),
    __param(0, (0, type_graphql_1.Arg)('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "getProductById", null);
__decorate([
    (0, type_graphql_1.Query)(() => product_schema_1.Product),
    __param(0, (0, type_graphql_1.Arg)('productName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "getProductByName", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => product_schema_1.Product),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_schema_1.CreateProductInput]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "createProduct", null);
ProductResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ProductResolver);
exports.default = ProductResolver;
//# sourceMappingURL=product.resolver.js.map
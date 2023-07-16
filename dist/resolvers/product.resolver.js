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
    getProductsByCategoryId(categoryID) {
        return product.getProductsByCategoryId(categoryID);
    }
    getProductsByFilter(input) {
        return product.getProductsByFilter(input);
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
    addImageInProduct(productID, image) {
        return product.addImageInProduct(productID, image);
    }
    removeImageFromProduct(productID, imageUrl) {
        return product.removeImageFromProduct(productID, imageUrl);
    }
    //get products based on user location if logged in (query) for home page
    updateProduct(productId, name, price, description, quantity) {
        return product.updateProduct(productId, name, price, description, quantity);
    }
    deleteProduct(productId) {
        return product.deleteProduct(productId);
    }
    addFeedback(userId, comment, productId) {
        return product.addFeedBack(userId, comment, productId);
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [product_schema_1.Product], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "getAllProducts", null);
__decorate([
    (0, type_graphql_1.Query)(() => [product_schema_1.Product], { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('categoryID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "getProductsByCategoryId", null);
__decorate([
    (0, type_graphql_1.Query)(() => [product_schema_1.Product], { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_schema_1.filterProductInput]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "getProductsByFilter", null);
__decorate([
    (0, type_graphql_1.Query)(() => product_schema_1.Product, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "getProductById", null);
__decorate([
    (0, type_graphql_1.Query)(() => product_schema_1.Product, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('productName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "getProductByName", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => product_schema_1.Product, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_schema_1.CreateProductInput]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "createProduct", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => product_schema_1.Product),
    __param(0, (0, type_graphql_1.Arg)('productID')),
    __param(1, (0, type_graphql_1.Arg)('image')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "addImageInProduct", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => product_schema_1.Product),
    __param(0, (0, type_graphql_1.Arg)('productID')),
    __param(1, (0, type_graphql_1.Arg)('imageUrl')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "removeImageFromProduct", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => product_schema_1.Product),
    __param(0, (0, type_graphql_1.Arg)('productId', { nullable: true })),
    __param(1, (0, type_graphql_1.Arg)('name', { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)('price', { nullable: true })),
    __param(3, (0, type_graphql_1.Arg)('description', { nullable: true })),
    __param(4, (0, type_graphql_1.Arg)('quantity', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, String, String]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "updateProduct", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "deleteProduct", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => product_schema_1.Product),
    __param(0, (0, type_graphql_1.Arg)('userId', { nullable: true })),
    __param(1, (0, type_graphql_1.Arg)('comment', { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)('productId', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "addFeedback", null);
ProductResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ProductResolver);
exports.default = ProductResolver;
//# sourceMappingURL=product.resolver.js.map
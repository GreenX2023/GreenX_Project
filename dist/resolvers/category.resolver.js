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
const category_schema_1 = __importDefault(require("../schema/category.schema"));
const type_graphql_1 = require("type-graphql");
const category_service_1 = __importDefault(require("../greenxServices/category.service"));
// import { createCategory,getAllCategory } from "../greenxServices/category.service";
let category = new category_service_1.default();
let CategoryResolver = class CategoryResolver {
    getAllCategory() {
        return category.getAllCategory();
    }
    getAllSubCategoryByCategoryId(categoryId) {
        return category.getAllSubCategoryByCategoryId(categoryId);
    }
    getCategoryById(categoryId) {
        return category.getCategoryById(categoryId);
    }
    getSubCategoryById(subCategoryId) {
        return category.getSubCategoryById(subCategoryId);
    }
    createSubCategory(name, parentCat, description, image) {
        return category.createSubCategory(name, parentCat, description, image);
    }
    createCategory(name, description, image) {
        return category.createCategory(name, description, image);
    }
    updateCategory(name, description, image, categoryId) {
        return category.updateCategory(name, description, image, categoryId);
    }
    updateSubCategory(name, description, image, subCategoryId) {
        return category.updateSubCategory(name, description, image, subCategoryId);
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [category_schema_1.default], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryResolver.prototype, "getAllCategory", null);
__decorate([
    (0, type_graphql_1.Query)(() => [category_schema_1.default], { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryResolver.prototype, "getAllSubCategoryByCategoryId", null);
__decorate([
    (0, type_graphql_1.Query)(() => [category_schema_1.default], { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryResolver.prototype, "getCategoryById", null);
__decorate([
    (0, type_graphql_1.Query)(() => [category_schema_1.default], { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('subCategoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryResolver.prototype, "getSubCategoryById", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => category_schema_1.default, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('name')),
    __param(1, (0, type_graphql_1.Arg)('parentCat')),
    __param(2, (0, type_graphql_1.Arg)('description')),
    __param(3, (0, type_graphql_1.Arg)('image')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String,
        String,
        String,
        String]),
    __metadata("design:returntype", void 0)
], CategoryResolver.prototype, "createSubCategory", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => category_schema_1.default, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('name')),
    __param(1, (0, type_graphql_1.Arg)('description')),
    __param(2, (0, type_graphql_1.Arg)('image')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String,
        String,
        String]),
    __metadata("design:returntype", void 0)
], CategoryResolver.prototype, "createCategory", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => category_schema_1.default, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('name', { nullable: true })),
    __param(1, (0, type_graphql_1.Arg)('description', { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)('image', { nullable: true })),
    __param(3, (0, type_graphql_1.Arg)('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String,
        String,
        String,
        String]),
    __metadata("design:returntype", void 0)
], CategoryResolver.prototype, "updateCategory", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => category_schema_1.default, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('name', { nullable: true })),
    __param(1, (0, type_graphql_1.Arg)('description', { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)('image', { nullable: true })),
    __param(3, (0, type_graphql_1.Arg)('subCategoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String,
        String,
        String,
        String]),
    __metadata("design:returntype", void 0)
], CategoryResolver.prototype, "updateSubCategory", null);
CategoryResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CategoryResolver);
exports.default = CategoryResolver;
//# sourceMappingURL=category.resolver.js.map
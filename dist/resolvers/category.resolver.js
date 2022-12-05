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
    createSubCategory(name, parentCat, description) {
        return category.createSubCategory(name, parentCat, description);
    }
    createCategory(name, description) {
        return category.createCategory(name, description);
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [category_schema_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryResolver.prototype, "getAllCategory", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => category_schema_1.default),
    __param(0, (0, type_graphql_1.Arg)('name')),
    __param(1, (0, type_graphql_1.Arg)('parentCat')),
    __param(2, (0, type_graphql_1.Arg)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String,
        String,
        String]),
    __metadata("design:returntype", void 0)
], CategoryResolver.prototype, "createSubCategory", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => category_schema_1.default),
    __param(0, (0, type_graphql_1.Arg)('name')),
    __param(1, (0, type_graphql_1.Arg)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String,
        String]),
    __metadata("design:returntype", void 0)
], CategoryResolver.prototype, "createCategory", null);
CategoryResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CategoryResolver);
exports.default = CategoryResolver;
//# sourceMappingURL=category.resolver.js.map
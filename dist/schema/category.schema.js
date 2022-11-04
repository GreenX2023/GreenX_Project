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
var Category_1;
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const product_schema_1 = require("./product.schema");
let Category = Category_1 = class Category {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Category.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Category.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Category.prototype, "image", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [product_schema_1.Product]),
    __metadata("design:type", Array)
], Category.prototype, "productList", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Category_1]),
    __metadata("design:type", Array)
], Category.prototype, "subcategoryList", void 0);
Category = Category_1 = __decorate([
    (0, type_graphql_1.ObjectType)()
], Category);
exports.default = Category;
//# sourceMappingURL=category.schema.js.map
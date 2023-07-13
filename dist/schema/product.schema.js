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
exports.CreateProductInput = exports.filterProductInput = exports.Product = void 0;
const type_graphql_1 = require("type-graphql");
let feedback = class feedback {
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], feedback.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], feedback.prototype, "feedbackId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], feedback.prototype, "rating", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], feedback.prototype, "comment", void 0);
feedback = __decorate([
    (0, type_graphql_1.ObjectType)()
], feedback);
let Product = class Product {
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "quantity", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], Product.prototype, "images", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "sellerID", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "rating", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "categoryID", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "pincode", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "city_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [feedback], { nullable: true }),
    __metadata("design:type", Array)
], Product.prototype, "feedbacks", void 0);
Product = __decorate([
    (0, type_graphql_1.ObjectType)()
], Product);
exports.Product = Product;
let filterProductInput = class filterProductInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], filterProductInput.prototype, "categoryID", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Number], { nullable: true }),
    __metadata("design:type", Array)
], filterProductInput.prototype, "rating", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], filterProductInput.prototype, "pincode", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], filterProductInput.prototype, "min", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], filterProductInput.prototype, "max", void 0);
filterProductInput = __decorate([
    (0, type_graphql_1.InputType)()
], filterProductInput);
exports.filterProductInput = filterProductInput;
let CreateProductInput = class CreateProductInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CreateProductInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CreateProductInput.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], CreateProductInput.prototype, "price", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CreateProductInput.prototype, "quantity", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CreateProductInput.prototype, "pincode", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CreateProductInput.prototype, "sellerID", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CreateProductInput.prototype, "categoryID", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], CreateProductInput.prototype, "images", void 0);
CreateProductInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateProductInput);
exports.CreateProductInput = CreateProductInput;
//# sourceMappingURL=product.schema.js.map
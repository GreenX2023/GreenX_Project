"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const test_resolver_1 = __importDefault(require("./test.resolver"));
const user_resolver_1 = __importDefault(require("./user.resolver"));
const product_resolver_1 = __importDefault(require("./product.resolver"));
const category_resolver_1 = __importDefault(require("./category.resolver"));
exports.resolvers = [test_resolver_1.default, user_resolver_1.default, product_resolver_1.default, category_resolver_1.default];
//# sourceMappingURL=allResolvers.js.map
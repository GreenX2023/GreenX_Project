"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var type_graphql_1 = require("type-graphql");
var TestResolver = /** @class */ (function () {
    function TestResolver() {
    }
    TestResolver.prototype.hello = function () {
        return "Hello Ozzy";
    };
    __decorate([
        (0, type_graphql_1.Query)(function () { return String; })
    ], TestResolver.prototype, "hello");
    TestResolver = __decorate([
        (0, type_graphql_1.Resolver)()
    ], TestResolver);
    return TestResolver;
}());
exports["default"] = TestResolver;

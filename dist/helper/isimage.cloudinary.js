"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isImageUrl = void 0;
const cloudinary_1 = __importDefault(require("cloudinary"));
const isImageUrl = async (url) => {
    try {
        const { resource_type } = await cloudinary_1.default.v2.api.resource(url);
        console.log(resource_type);
        return resource_type === "image";
    }
    catch (error) {
        console.error(`Failed to check image URL: ${url}`, error);
        return false;
    }
};
exports.isImageUrl = isImageUrl;
//# sourceMappingURL=isimage.cloudinary.js.map
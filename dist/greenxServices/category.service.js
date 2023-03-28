"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryModel = require('../models/Category.model');
const { uploadImage } = require("../helper/cloudinary.upload");
class CategoryService {
    constructor() {
        this.createSubCategory = async (name, parentCat, description, image) => {
            if (parentCat.length != 24) {
                throw new Error("Parent CatgoryID must be of Length 24");
            }
            const categoryAvailable = await CategoryModel.find({ _id: parentCat });
            if (categoryAvailable.length == 0) {
                throw new Error("Please Enter Valid CategoryID");
            }
            try {
                const photoUrl = image && (await uploadImage(image));
                const category = new CategoryModel({ name, description, image: photoUrl });
                await category.save();
                let catid = category._id;
                let parentcatid = parentCat;
                await CategoryModel.findOneAndUpdate({ _id: parentcatid }, { "$push": { "subCategoryList": catid } }, {
                    new: true
                });
                return category;
            }
            catch (error) {
                throw new Error("Error: " + error);
            }
        };
        this.getCategoryById = async (categoryId) => {
            try {
                const category = await CategoryModel.find({ _id: categoryId, isCategory: true });
                return category;
            }
            catch (error) {
                throw new Error(error);
            }
        };
        this.getSubCategoryById = async (subCategoryId) => {
            try {
                const category = await CategoryModel.find({ _id: subCategoryId, isCategory: false });
                return category;
            }
            catch (error) {
                throw new Error(error);
            }
        };
        this.getAllSubCategoryByCategoryId = async (categoryId) => {
            const category = await CategoryModel.find({ _id: categoryId });
            if (category.length == 0) {
                throw new Error(`No subcategory available got CategoryId ${categoryId}`);
            }
            const subCategoryIds = category[0].subCategoryList;
            const subCategory = await CategoryModel.find({ _id: subCategoryIds });
            return subCategory;
        };
        this.createCategory = async (name, description, image) => {
            try {
                const photoUrl = image && (await uploadImage(image));
                const category = new CategoryModel({ name, description, isCategory: true, image: photoUrl });
                await category.save();
                return category;
            }
            catch (error) {
                throw new Error(`Error ${error}`);
            }
        };
        this.getAllCategory = async () => {
            const result = await CategoryModel.find({ isCategory: true }).populate("productList");
            if (result) {
                return result;
            }
            else {
                throw new Error('Error in geting category');
            }
        };
        this.updateCategory = async (name, description, image, categoryId) => {
            try {
                const category = await CategoryModel.findOne({
                    _id: categoryId,
                    isCategory: true
                });
                if (!category) {
                    throw new Error('Please provide Valid Category ID');
                }
                let imageurl = undefined;
                if (image) {
                    imageurl = image && (await uploadImage(image));
                }
                const updateCategory = await CategoryModel.findOneAndUpdate({
                    _id: categoryId,
                    isCategory: true
                }, {
                    name,
                    description,
                    image: imageurl
                }, {
                    new: true
                });
                return updateCategory;
            }
            catch (error) {
                throw new Error(error);
            }
        };
        this.updateSubCategory = async (name, description, image, subCategoryId) => {
            try {
                console.log("yoo");
                const category = await CategoryModel.findOne({
                    _id: subCategoryId,
                    isCategory: false
                });
                console.log("ajdwyuhasd " + category);
                if (!category) {
                    throw new Error('Please provide Valid subCategory ID');
                }
                let imageurl = undefined;
                if (image) {
                    imageurl = image && (await uploadImage(image));
                }
                const updateCategory = await CategoryModel.findOneAndUpdate({
                    _id: subCategoryId,
                    isCategory: false
                }, {
                    name,
                    description,
                    image: imageurl
                }, {
                    new: true
                });
                return updateCategory;
            }
            catch (error) {
                throw new Error(error);
            }
        };
    }
}
exports.default = CategoryService;
//# sourceMappingURL=category.service.js.map
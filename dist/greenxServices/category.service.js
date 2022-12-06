"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryModel = require('../models/Category.model');
class CategoryService {
    constructor() {
        this.createSubCategory = async (name, parentCat, description) => {
            if (parentCat.length != 24) {
                throw new Error("Parent CatgoryID must be of Length 24");
            }
            const categoryAvailable = await CategoryModel.find({ _id: parentCat });
            if (categoryAvailable.length == 0) {
                throw new Error("Please Enter Valid CategoryID");
            }
            const category = new CategoryModel({ name, description });
            await category.save();
            let catid = category._id;
            let parentcatid = parentCat;
            await CategoryModel.findOneAndUpdate({ _id: parentcatid }, { "$push": { "subCategoryList": catid } }, {
                new: true
            });
            return category;
        };
        this.getAllSubCategoryByCategoryId = async (categoryId) => {
            const category = await CategoryModel.find({ _id: categoryId });
            if (category.length == 0) {
                throw new Error(`No subcategory available got CategoryId ${categoryId}`);
            }
            const subCategoryIds = category[0].subCategoryList;
            const subCategory = await CategoryModel.find({ _id: subCategoryIds });
            console.log(subCategory);
            return subCategory;
        };
        this.createCategory = async (name, description) => {
            const category = new CategoryModel({ name, description });
            await category.save();
            return category;
        };
        this.getAllCategory = async () => {
            const result = await CategoryModel.find({}).populate("productList");
            if (result) {
                return result;
            }
            else {
                throw new Error('Error in geting category');
            }
        };
    }
}
exports.default = CategoryService;
//# sourceMappingURL=category.service.js.map
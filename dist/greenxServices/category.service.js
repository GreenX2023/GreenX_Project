"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryModel = require('../models/Category.model');
class CategoryService {
    constructor() {
        this.createSubCategory = async (name, parentCat, description) => {
            const category = new CategoryModel({ name, description });
            await category.save();
            let catid = category._id;
            let parentcatid = parentCat;
            await CategoryModel.findOneAndUpdate({ _id: parentcatid }, { "$push": { "subCategoryList": catid } }, {
                new: true
            });
            return category;
        };
        this.createCategory = async (name, description) => {
            const category = new CategoryModel({ name, description });
            await category.save();
            return category;
        };
        this.getAllCategory = async () => {
            const result = await CategoryModel.find({}).populate('subCategoryList');
            if (result) {
                console.log(result);
                return result;
            }
            else {
                console.log('Error in geting category');
            }
        };
    }
}
exports.default = CategoryService;
//# sourceMappingURL=category.service.js.map
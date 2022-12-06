"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryModel = require('../models/Category.model');
class CategoryService {
    constructor() {
        this.createSubCategory = async (name, parentCat, description) => {
            if (parentCat.length != 24) {
                throw new Error("Parent CatgoryID must be of Length 24");
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
        this.createCategory = async (name, description) => {
            const category = new CategoryModel({ name, description });
            await category.save();
            return category;
        };
        this.getAllCategory = async () => {
            // const result=await UserModel.find({}).populate("products");
            // console.log("hey"+result)
            // if(result){
            //     console.log(result)
            //     return result;
            // }
            // else{
            //     console.log('Error in getting users')
            // }
            const result = await CategoryModel.find({}).populate("productList");
            console.log("hey" + result);
            if (result) {
                console.log(result);
                console.log("heyy" + result[0]);
                return result;
            }
            else {
                console.log('Error in geting category');
                throw new Error('Error in geting category');
            }
        };
    }
}
exports.default = CategoryService;
//# sourceMappingURL=category.service.js.map
const CategoryModel = require('../models/Category.model')

export default class CategoryService{

   createSubCategory = async (name: String,parentCat: String,description:String) =>{
            if(parentCat.length!=24){
                throw new Error("Parent CatgoryID must be of Length 24")
            }
            const categoryAvailable=await CategoryModel.find({_id:parentCat});
            if(categoryAvailable.length==0){
                throw new Error("Please Enter Valid CategoryID")
            }
          const category = new CategoryModel({name,description});
          await category.save();
          let catid = category._id;
          let parentcatid = parentCat;
          await CategoryModel.findOneAndUpdate({_id:parentcatid},{ "$push": { "subCategoryList": catid } }, {
            new: true
          });

          return category
    }

    getAllSubCategoryByCategoryId=async(categoryId:String)=>{
        const category=await CategoryModel.find({_id:categoryId});
        if(category.length==0){
            throw new Error(`No subcategory available got CategoryId ${categoryId}`)
        }
        const subCategoryIds=category[0].subCategoryList;
        const subCategory=await CategoryModel.find({_id:subCategoryIds});
        console.log(subCategory)
        return subCategory
    }

    createCategory=async(name:String,description:String)=>{
        const category = new CategoryModel({name,description});
        await category.save();
        return category;
    }
    getAllCategory = async()=>{
        const result =await CategoryModel.find({}).populate("productList");
        if(result){
            return result
        }
        else{
            throw new Error('Error in geting category')
        }
    }

}

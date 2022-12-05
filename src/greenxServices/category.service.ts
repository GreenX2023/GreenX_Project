const CategoryModel = require('../models/Category.model')

export default class CategoryService{

   createSubCategory = async (name: any,parentCat: any,description:any) =>{
        const category = new CategoryModel({name,description});
          await category.save();
          let catid = category._id;
          let parentcatid = parentCat;
          await CategoryModel.findOneAndUpdate({_id:parentcatid},{ "$push": { "subCategoryList": catid } }, {
            new: true
          });
          return category
    }

    createCategory=async(name:any,description:any)=>{
        const category = new CategoryModel({name,description});
        await category.save();

        return category;
    }
    getAllCategory = async()=>{
        const result =await CategoryModel.find({}).populate('subCategoryList')
        if(result){
            console.log(result);
            return result
        }
        else{
            console.log('Error in geting category')
        }
    }

}

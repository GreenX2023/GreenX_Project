const CategoryModel = require('../models/Category.model')

export default class CategoryService{

   createCategory = async (name: any,parentCat: any) =>{
        const category = new CategoryModel({name});
          await category.save();
          let catid = category._id;
          let parentcatid = parentCat;
          await CategoryModel.findOneAndUpdate({_id:parentcatid},{ "$push": { "subCategoryList": catid } }, {
            new: true
          });
          return category
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

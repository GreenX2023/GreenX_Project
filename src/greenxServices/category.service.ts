const CategoryModel = require('../models/Category.model')

export default class CategoryService{

   createSubCategory = async (name: String,parentCat: String,description:String) =>{
            if(parentCat.length!=24){
                throw new Error("Parent CatgoryID must be of Length 24")
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

    createCategory=async(name:String,description:String)=>{
        const category = new CategoryModel({name,description});
        await category.save();
        return category;
    }
    getAllCategory = async()=>{

        // const result=await UserModel.find({}).populate("products");
        // console.log("hey"+result)
        // if(result){
        //     console.log(result)
        //     return result;
        // }
        // else{
        //     console.log('Error in getting users')
        // }



        const result =await CategoryModel.find({}).populate("productList");
        console.log("hey"+result)
        if(result){
            console.log(result)
            console.log("heyy"+result[0]);
            return result
        }
        else{
            console.log('Error in geting category')
            throw new Error('Error in geting category')
        }
    }

}

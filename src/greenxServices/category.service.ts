const CategoryModel = require('../models/Category.model')
const uploadImage = require("../helper/cloudinary.upload")

export default class CategoryService{

   createSubCategory = async (name: String,parentCat: String,description:String,image:String) =>{
            if(parentCat.length!=24){
                throw new Error("Parent CatgoryID must be of Length 24")
            }
            const categoryAvailable=await CategoryModel.find({_id:parentCat});
            if(categoryAvailable.length==0){
                throw new Error("Please Enter Valid CategoryID")
            }

            try {
                
                const category = new CategoryModel({name,description,image});
                await category.save();
                let catid = category._id;
                let parentcatid = parentCat;
                await CategoryModel.findOneAndUpdate({_id:parentcatid},{ "$push": { "subCategoryList": catid } }, {
                  new: true
                });
      
                return category 
            } catch (error) {
                throw new Error("Error: "+error)
            }
       
    }

    getAllSubCategoryByCategoryId=async(categoryId:String)=>{
        const category=await CategoryModel.find({_id:categoryId});
        if(category.length==0){
            throw new Error(`No subcategory available got CategoryId ${categoryId}`)
        }
        const subCategoryIds=category[0].subCategoryList;
        const subCategory=await CategoryModel.find({_id:subCategoryIds});
        return subCategory
    }

    createCategory=async(name:String,description:String,image:String)=>{
          try { 
            const validImage:any=[];
            if (validImage.length === 0) {
                throw new Error("No valid image URLs provided.");
              }
            uploadImage(image)
            const category = new CategoryModel({name,description,isCategory:true,image:validImage[0]});
            await category.save();
            return category;
                
          } catch (error) {
            throw new Error(`Error ${error}`)
          }     
  

    }
    getAllCategory = async()=>{
        const result =await CategoryModel.find({isCategory:true}).populate("productList");
        if(result){
            return result
        }
        else{
            throw new Error('Error in geting category')
        }
    }

}

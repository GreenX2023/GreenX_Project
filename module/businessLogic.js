const UserSchema=require('../server/Models/User.model');
const CategorySchema=require('../server/Models/Category.model');
const ProductSchema=require('../server/Models/Product.model');
const SubCategorySchema=require('../server/Models/Subcategory.model');
// const {ObjectId} = require('mongodb'); 

const getAllCategory = async()=>{
    const result =await CategorySchema.find({}).populate('subCategoryList')
    if(result){
        return result
    }
    else{
        console.log('Error in geting category')
    }
}

const getAllProducts = async()=>{
    const result=await ProductSchema.find({});
    if(result){
        return result;
    }
    else{
        console.log('Error in getting products')
    }
}

const getProductById = async(args)=>{
    const result=await  ProductSchema.find({_id:args.productID});
    return result;
}

const getProductByName = async(args)=>{
    const result=await  ProductSchema.find({name:args.productName});
    return result;
}

const getSellerProducts = async(args)=>{
    const user=await UserSchema.find({_id:args.sellerID}).populate('products');
    return user[0].products
}

const getBookmarksForUser = async(args)=>{
    const user=await UserSchema.find({_id:args.sellerID}).populate('bookmarks');
    return user[0].bookmarks;
}

module.exports = {getAllCategory,getAllProducts,getProductById,getProductByName,getSellerProducts,getBookmarksForUser}
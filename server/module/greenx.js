const UserSchema=require('../Models/User.model');
const CategorySchema=require('../Models/Category.model');
const ProductSchema=require('../Models/Product.model');
const {ObjectId} = require('mongodb');


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

const updateBookmarksAdd = async(args)=>{
    
    let bookmarkproduct = new ObjectId(`${args.productId}`); 
    let doc = await UserSchema.findOneAndUpdate({_id:args._id},{ "$push": { "bookmarks": bookmarkproduct } }, {
        new: true
      });
    return doc
}

const updateBookmarksremove =  async(args)=>{
    let bookmarkproduct = new ObjectId(`${args.productId}`); 
    let doc = await UserSchema.findOneAndUpdate({_id:args._id},{ "$pull": { "bookmarks": bookmarkproduct } }, {
        new: true
      });  
 return doc

}

module.exports = {
    getAllCategory,
    getAllProducts,
    getProductById,
    getProductByName,
    getSellerProducts,
    getBookmarksForUser,
    updateBookmarksAdd,
    updateBookmarksremove}
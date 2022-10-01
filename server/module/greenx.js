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

const createProduct =  async(args)=>{
    var productdetails= new ProductSchema(args.input);
    await productdetails.save();
    let sellerId=productdetails.sellerID;
    let productid=productdetails._id;
    let catid = productdetails.categoryID;
    let doc = await UserSchema.findOneAndUpdate({_id:sellerId},{ "$push": { "products": productid } }, {
        new: true
      });
    let doc2 = await CategorySchema.findOneAndUpdate({_id:catid},{ "$push": { "productList": productid } }, {
        new: true
      });

    return productdetails
}
const createCategory = async(args)=>{
    var CategoryDetails =new CategorySchema({name:args.name,categoryID:args.categoryID}); 
    await CategoryDetails.save();
    let catid = CategoryDetails._id;
    let parentcatid = args.categoryID;
    let doc = await CategorySchema.findOneAndUpdate({_id:parentcatid},{ "$push": { "subCategoryList": catid } }, {
        new: true
      });
    
    return CategoryDetails;
}
module.exports = {
    getAllCategory,
    getAllProducts,
    getProductById,
    getProductByName,
    getSellerProducts,
    getBookmarksForUser,
    updateBookmarksAdd,
    updateBookmarksremove,
    createProduct,
    createCategory}
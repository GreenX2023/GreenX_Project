const ProductModel = require('../models/Product.model')
const UserModel = require('../models/User.model')
const CategoryModel = require('../models/Category.model')
const { uploadImage } = require("../helper/cloudinary.upload");



export default class ProductService{
  createProduct = async (input: any) =>{
    try {
    const {name,description,price,quantity,sellerID,categoryID,images}=input;
    const uploadimages:string[]=await Promise.all(
      images.map(async(image:any)=>{

        try {
          const photoUrl = image && (await uploadImage(image));
          return photoUrl;
        } catch (error) {
          throw new Error(`Error uploading image: ${error.message}`)
        }     

      })
    ) 

    if(input.sellerID.length!=24 || input.categoryID.length!=24){
      throw new Error("Please provide valid seller and Customer ID");
    }
   
    const user=await UserModel.find({_id:input.sellerID})
    const category=await CategoryModel.find({_id:input.categoryID})

    if(user.length==0){
      throw new Error("Please provide valid seller ID")
    }

    if(category.length==0 ){
      throw new Error("Please provide valid Category ID")
    }
    
    const product = new ProductModel({
      name,
      price,
      description,
      quantity,
      images:uploadimages,
      categoryID,
      sellerID
    });
    await product.save();
    let sellerId=product.sellerID;
    let productid=product._id;
    let catid = product.categoryID;
    await UserModel.findOneAndUpdate({_id:sellerId},{ "$push": { "products": productid } }, {
        new: true
      });
    await CategoryModel.findOneAndUpdate({_id:catid},{ "$push": { "productList": productid } }, {
        new: true
      });
    return product
    } catch (error) {
      throw new Error(error)
    }
}

addImageInProduct=async(productID:String,image:String)=>{
  try {
    const product=await ProductModel.findOne({_id:productID})
    if(!product){
      throw new Error("Invalid Product ID")
    }
    const photoUrl = image && (await uploadImage(image));
    const addNewImage= await ProductModel.findOneAndUpdate({_id:productID},{ "$push": { "images": photoUrl } }, {
      new: true
    });
    return addNewImage
  } catch (error) {
    throw new Error(error)
  }
}

removeImageFromProduct=async(productID:String,imageUrl:String)=>{
  try {
    const product=await ProductModel.findOne({_id:productID,images: imageUrl})
    if(!product){
      throw new Error("Please provide Valid productID and imageUrl")
    }
    const removeImage= await ProductModel.findOneAndUpdate({_id:productID},{ "$pull": { "images": imageUrl } }, {
      new: true
    });
    return removeImage;
  } catch (error) {
    throw new Error(error)
  }
}


getAllProducts = async()=>{
  try {
    const result=await ProductModel.find({});
  if(result){
      return result;
  }
  else{
      throw new Error('Error in getting products')
  }
  } catch (error) {
    throw new Error('Error in getting products '+error)
  }
  
}

getProductById = async(productID: any)=>{
  try {
    if(productID.length!=24){
      throw new Error("Product ID must be of Length 24")
  }
    const result=await  ProductModel.findOne({_id:productID});
    return result;
  } catch (error) {
    throw new Error('Error in getting product By Id '+error)
  }
 
}

getProductByName = async(productName:any)=>{
  try {
    if(productName.length==0){
      throw new Error("Product Name is Empty")
    }
    const result=await  ProductModel.findOne({name:productName});
    return result;
  } catch (error) {
    throw new Error('Error in getting product By Name '+error)
  }
 

}

}


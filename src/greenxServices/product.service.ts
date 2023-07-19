const ProductModel = require('../models/Product.model')
const UserModel = require('../models/User.model')
const CategoryModel = require('../models/Category.model')
const { uploadImage } = require("../helper/cloudinary.upload");
const {classifyComments}=require('../helper/sentiment.analysis')
const crypto = require('crypto');
const axios = require('axios');

function generateId() {
    return crypto.randomBytes(12).toString('hex');
}


export default class ProductService{
  createProduct = async (input: any) =>{
    const {name,description,price,quantity,sellerID,categoryID,images,pincode}=input;
    try {
      
       const options = {
       method: 'GET',
       url: `https://api.postalpincode.in/pincode/${pincode}`,
       headers: {
          'content-type': 'application/json',
        }
        };
var city_name=''
try {
	const response = await axios.request(options);
  console.log(response)
  city_name=response.data[0].PostOffice[0].Block
	console.log(city_name);
} catch (error) {
	throw new Error("Invalid pincode")
}
    
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
      sellerID,
      pincode,
      city_name
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

getProductsByCategoryId=async(categoryId:String)=>{
  const products= await ProductModel.find({
    categoryID:categoryId,
  })
  return  products
}

getProductsByFilter=async(input:any)=>{
  const {categoryID,rating,pincode,min,max}=input;
  console.log({categoryID,rating,pincode,min,max})
  const products= await ProductModel.find({
    categoryID:categoryID,
    rating:rating,
    pincode:pincode,
    price: { $gte: min, $lte: max }
  })
  return  products
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

addFeedBack=async(userId:String,comment:String,productId:String)=>{
  try {
    
  const user=await UserModel.findOne({
    _id:userId
  })
  if(!user)
  {
    throw new Error('User ID is Invalid')
  }
  const rating=classifyComments(comment);

  const feedback={
    user: userId,
    rating:rating,
    comment:comment,
    feedbackId:generateId()
  }

  const addFeedBack=await ProductModel.findOneAndUpdate({
    _id:productId
  },{
     "$push": { "feedbacks": feedback } 
  },{
    new: true 
  })
  if(!addFeedBack){
    throw new Error("feedBack Not Added")
  }
  const product=await ProductModel.findOne({
    _id:productId
  })
  let main_rating=0;
  let ratings=0;
  for(let i=0;i<product.feedbacks.length;i++){
    ratings+=product.feedbacks[i].rating
  }
  main_rating=ratings/(product.feedbacks.length+1)

await ProductModel.findOneAndUpdate({
    _id:productId
  },{
     rating:main_rating
  })
 
  return addFeedBack
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

getProductByNameAndPincode=async(productName:string,pincode:any)=>{
  try {
    const regexPattern = new RegExp(productName, 'i');
    const result = await ProductModel.find({
      name: { $regex: regexPattern },
      pincode: pincode,
    });
    console.log(result)
    return result;
  } catch (error) {
    throw new Error('Error in getting product By Name '+error)
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

updateProduct=async(productId:String,name:String,price:Number,description:String,quantity:String)=>{
try {
  const product=await ProductModel.findOne({
    _id:productId
  })
  if(!product){
    throw new Error('Please provide valid productID')
  }

  const productUpdate=await ProductModel.findOneAndUpdate({
    _id:productId
  },{
    name,
    price,
    description,
    quantity
  })
  return productUpdate
} catch (error) {
  throw new Error(error)
}
}

deleteProduct=async(productID:String)=>{
  try {
    const product=await ProductModel.findOne({
      _id:productID
    })
    if(!product){
      throw new Error('Please provide valid productID')
    }

    const categoryId=product.categoryID;
    const sellerID=product.sellerID;

    await CategoryModel.findOneAndUpdate({
      _id:categoryId
    },{
       "$pull": { "productList": productID }
    })

    await UserModel.findOneAndUpdate({
      _id:sellerID
    },{
       "$pull": { "products": productID }
    })

    const deleteProduct=await ProductModel.deleteOne({
      _id:productID
    })

    if(deleteProduct.deletedCount==1){
      return "Deleted Successfully"
    }
    return "Deletion UnSuccessfull"
  } catch (error) {
    throw new Error(error)
  }
}

}


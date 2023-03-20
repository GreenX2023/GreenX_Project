const ProductModel = require('../models/Product.model')
const UserModel = require('../models/User.model')
const CategoryModel = require('../models/Category.model')
const cloudinary=require('../helper/cloudinary.upload')



export default class ProductService{
  createProduct = async (input: any) =>{
    const {name,description,price,quantity,location,sellerID,categoryID,images}=input;

    const uploadimages:string[]=await Promise.all(
      images.map(async(image:any)=>{

        try {
          const result= await cloudinary.uploader.upload(image);
          return result.url;
        } catch (error) {
          throw new Error(`Error uploading image: ${error.message}`)
        }     

      })
    ) ||["https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"]

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
      location,
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
}




getAllProducts = async()=>{
  const result=await ProductModel.find({});
  if(result){
      return result;
  }
  else{
      throw new Error('Error in getting products')
  }
}

getProductById = async(productID: any)=>{
  if(productID.length!=24){
    throw new Error("Product ID must be of Length 24")
}
  const result=await  ProductModel.findOne({_id:productID});
  return result;
}

getProductByName = async(productName:any)=>{
  if(productName.length==0){
    throw new Error("Product Name is Empty")
  }
  const result=await  ProductModel.findOne({name:productName});
  return result;
}

}




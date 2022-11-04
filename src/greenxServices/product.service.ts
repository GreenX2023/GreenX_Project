const ProductModel = require('../models/Product.model')
const UserModel = require('../models/User.model')
const CategoryModel = require('../models/Category.model')

export default class ProductService{
  createProduct = async (input: any) =>{
    const product = new ProductModel(input);
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
      console.log('Error in getting products')
  }
}

getProductById = async(productID: any)=>{
  const result=await  ProductModel.findOne({_id:productID});
  return result;
}

/**
* @description gets product details from the database
*
* @param {string} productName - provide the name of the product to fetch
* 
* @returns {{_id: string, name: string, productList: string[]}} product details
*/

getProductByName = async(productName:any)=>{
  const result=await  ProductModel.findOne({name:productName});
  return result;
}

}




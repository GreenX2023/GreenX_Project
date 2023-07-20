import { Product,CreateProductInput, filterProductInput, ProductUpdateInput } from "../schema/product.schema";

import { Query, Resolver,Mutation,Arg } from "type-graphql";
import ProductService from "../greenxServices/product.service";
const ProductModel = require('../models/Product.model')

let product= new ProductService()

@Resolver()
export default class ProductResolver{


    @Query(()=>[Product],{nullable: true})
    getAllProducts(){
        return product.getAllProducts()
    }

    @Query(()=>[Product],{nullable: true})
    getProductsByCategoryId(@Arg('categoryID') categoryID: string){
        return product.getProductsByCategoryId(categoryID)
    }

    
    @Query(()=>[Product],{nullable: true})
    getProductsByFilter(@Arg('input') input: filterProductInput){
        return product.getProductsByFilter(input)
    }


    @Query(()=>Product,{nullable: true})
    getProductById(@Arg('productID') productID: string){
        return product.getProductById(productID)
    }

    @Query(()=>Product,{nullable: true})
    getProductByName(@Arg('productName') productName: string){
        return product.getProductByName(productName)
    }

    @Query(()=>[Product],{nullable: true})
    getProductByNameAndLocation(@Arg('productName') productName: string,
    @Arg('pincode') pincode: string
    ){
        return product.getProductByNameAndPincode(productName,pincode)
    }

    @Mutation(()=> Product,{nullable: true})
    createProduct(@Arg('input') input: CreateProductInput){
        return product.createProduct(input)
    }

    @Mutation(()=>Product)
    addImageInProduct(
        @Arg('productID') productID: string,
        @Arg('image') image: string
    ){
        return product.addImageInProduct(productID,image)
    }

    @Mutation(()=>Product)
    removeImageFromProduct(
        @Arg('productID') productID: string,
        @Arg('imageUrl') imageUrl: string
    ){
        return product.removeImageFromProduct(productID,imageUrl)
    }
    // @Arg('productId',{ nullable: true }) productId: string,
    // @Arg('name',{ nullable: true }) name: string,
    // @Arg('price',{ nullable: true }) price: Number,
    // @Arg('description',{ nullable: true }) description: string,
    // @Arg('quantity',{ nullable: true }) quantity: string,

    // productId,name,price,description,quantity
    //get products based on user location if logged in (query) for home page

    @Mutation(()=>Product)
   async updateProduct(
        @Arg("productId") productId: string,
       @Arg("data") data: ProductUpdateInput
    ){
        try {
            const product = await ProductModel.findById(productId);
      
            if (!product) {
              throw new Error("Product not found");
            }
      
            // Update the product properties with the data from the input
            if (data.name) product.name = data.name;
            if (data.price) product.price = data.price;
            if (data.description) product.description = data.description;
            if (data.quantity) product.quantity = data.quantity;
            if (data.images) product.images = data.images;
            if (data.categoryID) product.categoryID = data.categoryID;
            if (data.sellerID) product.sellerID = data.sellerID;
            if (data.rating) product.rating = data.rating;
            if (data.pincode) product.pincode = data.pincode;
            if (data.city_name) product.city_name = data.city_name;
      
            // Save the updated product
            const updatedProduct = await product.save();
      
            return updatedProduct;
          } catch (error) {
            console.error("Error updating product:", error);
            throw new Error("Error updating product");
          }
    }

    @Mutation(()=>String)
    deleteProduct(
        @Arg('productId') productId:String
    ){
        return product.deleteProduct(productId)
    }

    @Mutation(()=>Product)
    addFeedback(
        @Arg('userId',{ nullable: true }) userId: string,
        @Arg('comment',{ nullable: true }) comment: string,
        @Arg('productId',{ nullable: true }) productId: string
    ){
        return product.addFeedBack(userId,comment,productId)
    }



}
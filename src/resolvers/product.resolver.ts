import { Product,CreateProductInput } from "../schema/product.schema";

import { Query, Resolver,Mutation,Arg } from "type-graphql";
import ProductService from "../greenxServices/product.service";

let product= new ProductService()

@Resolver()
export default class ProductResolver{


    @Query(()=>[Product])
    getAllProducts(){
        return product.getAllProducts()
    }

    @Query(()=>Product)
    getProductById(@Arg('productID') productID: string){
        return product.getProductById(productID)
    }

    @Query(()=>Product)
    getProductByName(@Arg('productName') productName: string){
        return product.getProductByName(productName)
    }

    @Mutation(()=> Product)
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
    //get products based on user location if logged in (query) for home page
}
import { Product,CreateProductInput } from "../schema/product.schema";

import { Query, Resolver,Mutation,Arg } from "type-graphql";
import ProductService from "../greenxServices/product.service";

let product= new ProductService()

@Resolver()
export default class ProductResolver{


    @Query(()=>[Product],{nullable: true})
    getAllProducts(){
        return product.getAllProducts()
    }

    
    @Query(()=>[Product],{nullable: true})
    getProductsByFilter(@Arg('categoryID') categorID: string,
    @Arg('rating') rating: number
    ){
        return product.getProductsByFilter(categorID,rating)
    }


    @Query(()=>Product,{nullable: true})
    getProductById(@Arg('productID') productID: string){
        return product.getProductById(productID)
    }

    @Query(()=>Product,{nullable: true})
    getProductByName(@Arg('productName') productName: string){
        return product.getProductByName(productName)
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
    //get products based on user location if logged in (query) for home page

    @Mutation(()=>Product)
    updateProduct(
        @Arg('productId',{ nullable: true }) productId: string,
        @Arg('name',{ nullable: true }) name: string,
        @Arg('price',{ nullable: true }) price: Number,
        @Arg('description',{ nullable: true }) description: string,
        @Arg('quantity',{ nullable: true }) quantity: string,
    ){
        return product.updateProduct(productId,name,price,description,quantity)
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
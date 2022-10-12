import { Product,CreateProductInput } from "../schema/product.schema";
import {createProduct,getAllProducts} from '../greenxServices/product.service'
import { Query, Resolver,Mutation,Arg } from "type-graphql";

@Resolver()
export default class ProductResolver{

    @Query(()=>Product)
    myProduct(){
        return{
            _id:"123",
            name:"rice",
            price:321
        };
    }

    @Query(()=>[Product])
    getAllProducts(){
        return getAllProducts()
    }

    @Mutation(()=> Product)
    createProduct(@Arg('input') input: CreateProductInput){
        return createProduct(input)
    }
}
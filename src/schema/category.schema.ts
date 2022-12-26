import { Field,ObjectType } from "type-graphql";
import { Product } from "./product.schema";

@ObjectType()
export default class Category{
    @Field(() => String,{nullable: true})
    _id: string

    @Field(()=>String,{nullable: true})
    name: string

    @Field(()=>String,{nullable: true})
    description: string    

    @Field(()=>String,{nullable: true})
    image: string      

    @Field(()=>[Product],{nullable: true})
    productList:Array<Product>

    
}
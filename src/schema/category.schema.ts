import { Field,ObjectType } from "type-graphql";
import { Product } from "./product.schema";

@ObjectType()
export default class Category{
    @Field(() => String)
    _id: string

    @Field(()=>String)
    name: string

    @Field(()=>String)
    description: string    //new

    @Field(()=>String)
    image: string      //new

    @Field(()=>[Product])
    productList:Array<Product>

    @Field(()=>[Category])
    subcategoryList:Array<Category>
}
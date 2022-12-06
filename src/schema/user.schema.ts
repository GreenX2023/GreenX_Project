import { Field,ObjectType,InputType } from "type-graphql";
import { Product } from "./product.schema";

@ObjectType()
export default class User{
    @Field(() => String,{nullable: true})
    _id: string

    @Field(() => String,{nullable: true})
    role: string

    @Field(()=>String,{nullable: true})
    name: string

    @Field(()=>String,{nullable: true})
    email: string

    @Field(()=>String,{nullable: true})
    password: string

    @Field(() => String,{nullable: true})
    contactnum: string

    @Field(() => String,{nullable: true})
    address: string

    @Field(() => String,{nullable: true})
    bio: string

    @Field(()=>[String])
    products:Array<string>

    @Field(()=>[Product])
    bookmarks:Array<Product>
}

@InputType()
export class CreateUserInput{
    @Field(()=>String)
    role: string;

    @Field(()=>String)
    name: string;

    @Field(()=>String)
    email: string;

    @Field(()=>String)
    password: string;

    @Field(()=>String)
    contactnum: string;

}
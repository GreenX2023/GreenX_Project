import { Field,ObjectType,InputType } from "type-graphql";
import { Product } from "./product.schema";


@ObjectType()
class Location {
  @Field(() => String)
  type: "Point";

  @Field(() => [Number])
  coordinates: [number, number];
}

@ObjectType()
export class loginUser{
    @Field(() => String,{nullable: true})
    token: string

    @Field(() => String,{nullable: true})
    id: string


}

@ObjectType()
export class User{
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

    @Field(()=>[Product],{nullable: true})
    products:Array<Product>

    @Field(()=>[Product],{nullable: true})
    bookmarks:Array<Product>

    @Field(()=>Location,{nullable: true})
    location:Location

}

@InputType()
class LocationInput {
  @Field(() => String)
  type!: "Point";

  @Field(() => [Number])
  coordinates!: [number, number];
}

@InputType()
export class CreateUserInput{
   
    @Field(()=>String,{ nullable: true })
    name!: string;

    @Field(()=>String,{ nullable: true })
    email?: string;

    @Field(()=>String,{ nullable: true })
    password!: string;

    @Field(()=>String,{ nullable: true })
    contactnum!: string;

    @Field(()=>LocationInput,{ nullable: true })
    location!:LocationInput

}
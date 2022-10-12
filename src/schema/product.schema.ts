import { Field, ObjectType,InputType } from "type-graphql";

@ObjectType()
export class Product{
    @Field(()=>String)
    _id: string

    @Field(()=>String)
    name:string

    @Field(()=>String)
    description:string

    @Field(()=>Number)
    price: number

    @Field(()=>String)
    quantity:string

    @Field(()=>[String])
    images:Array<string>

    @Field(()=>String)
    location:string

    @Field(()=>String)
    sellerID:string

    @Field(()=>String)
    categoryID:string
}

@InputType()
export class CreateProductInput{
    @Field(()=>String)
    name: string;

    @Field(()=>String)
    description: string;

    @Field(()=>Number)
    price: number;

    @Field(()=>String)
    quantity: string;

    @Field(()=>String)
    location:string

    @Field(()=>String)
    sellerID: string;

    @Field(()=>String)
    categoryID:string

}
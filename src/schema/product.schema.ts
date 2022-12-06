import { Field, ObjectType,InputType } from "type-graphql";

@ObjectType()
export class Product{
    @Field(()=>String,{nullable: true})
    _id: string

    @Field(()=>String,{nullable: true})
    name:string

    @Field(()=>String,{nullable: true})
    description:string

    @Field(()=>Number,{nullable: true})
    price: number

    @Field(()=>String,{nullable: true})
    quantity:string

    @Field(()=>[String],{nullable: true})
    images:Array<string>

    @Field(()=>String,{nullable: true})
    location:string

    @Field(()=>String,{nullable: true})
    sellerID:string

    @Field(()=>String,{nullable: true})
    categoryID:string
}

@InputType()
export class CreateProductInput{
    @Field(()=>String,{nullable: true})
    name: string;

    @Field(()=>String,{nullable: true})
    description: string;

    @Field(()=>Number,{nullable: true})
    price: number;

    @Field(()=>String,{nullable: true})
    quantity: string;

    @Field(()=>String,{nullable: true})
    location:string

    @Field(()=>String,{nullable: true})
    sellerID: string;

    @Field(()=>String,{nullable: true})
    categoryID:string

}
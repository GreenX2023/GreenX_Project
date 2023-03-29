import { Field, ObjectType,InputType } from "type-graphql";
// @ts-ignore
import GraphQLUpload from 'graphql-upload/public/GraphQLUpload.js';

@ObjectType()
class feedback{
    @Field(() => String,{nullable: true})
    user: string;
  
    @Field(() => String,{nullable: true})
    feedbackId: string;

    @Field(() => Number,{nullable: true})
    rating: number;

    @Field(() => String,{nullable: true})
    comment: string;
}

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
    sellerID:string

    @Field(()=>String,{nullable: true})
    categoryID:string

    @Field(()=>[feedback],{nullable: true})
    feedbacks:[feedback]
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
    sellerID: string;

    @Field(()=>String,{nullable: true})
    categoryID:string

    @Field(()=>[String],{nullable:true})
    images:string[]

}
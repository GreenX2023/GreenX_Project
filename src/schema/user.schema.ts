import { Field,ObjectType,InputType } from "type-graphql";


@ObjectType()
export default class User{
    @Field(() => String)
    _id: string

    @Field(() => String)
    role: string

    @Field(()=>String)
    name: string

    @Field(()=>String)
    email: string

    @Field(()=>String)
    password: string

    @Field(() => String)
    contactnum: string

    @Field(() => String)
    address: string

    @Field(() => String)
    bio: string

    @Field(()=>[String])
    products:Array<string>

    @Field(()=>[String])
    bookmarks:Array<string>
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
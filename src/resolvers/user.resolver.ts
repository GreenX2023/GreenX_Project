import User from "../schema/user.schema";
import { CreateUserInput} from "../schema/user.schema";
import { Query, Resolver,Mutation,Arg } from "type-graphql";
import { Product } from "../schema/product.schema";
import UserService from "../greenxServices/user.service";
// import UserService from "../greenxServices/user.service";
// const {UserModel} = require('../models/User.model')
//decorator helps us to extends the functionality of classes and methods


let user=new UserService()

@Resolver()
export default class UserResolver{

    @Mutation(()=> User)
    createUser(@Arg('input') input: CreateUserInput){
        return user.createUser(input)
    }

    @Mutation(()=> User)
    updateBookmarksAdd(
        @Arg('userId') userId: String ,
        @Arg('productId') productId: String
        ){
        return user.updateBookmarksAdd(userId,productId)
    }

    @Mutation(()=> User)
    updateBookmarksRemove(
        @Arg('userId') userId: String ,
        @Arg('productId') productId: String
        ){
        return user.updateBookmarksRemove(userId,productId)
    }

    @Query(()=>User)
    me(){
        return{
            _id:"123",
            name:"Austin",
            email:"a@gmail.com"
        };
    }
    @Query(()=>[User])
    getAllUsers(){
        return user.getAllUsers()
    }

    @Query(()=>User)
    getUserById(@Arg('userId') userId: String){
        return user.getUserById(userId)
    }

    @Query(()=>[Product])
    getSellerProducts(@Arg('userId') userId: String){
        return user.getSellerProducts(userId)
    }

    @Query(()=>[Product])
    getBookmarksForUser(@Arg('userId') userId: String){
        return user.getBookmarksForUser(userId)
    }

}
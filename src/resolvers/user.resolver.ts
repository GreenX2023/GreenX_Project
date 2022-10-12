import User from "../schema/user.schema";
import { CreateUserInput} from "../schema/user.schema";
import { Query, Resolver,Mutation,Arg } from "type-graphql";
import { Product } from "../schema/product.schema";
// import UserService from "../greenxServices/user.service";
// const {UserModel} = require('../models/User.model')
const {createUser,getAllUsers,getUserById,getSellerProducts,getBookmarksForUser,updateBookmarksAdd,updateBookmarksRemove} = require('../greenxServices/user.service')

@Resolver()
export default class UserResolver{

    @Mutation(()=> User)
    createUser(@Arg('input') input: CreateUserInput){
        return createUser(input)
    }

    @Mutation(()=> User)
    updateBookmarksAdd(
        @Arg('userId') userId: String ,
        @Arg('productId') productId: String
        ){
        return updateBookmarksAdd(userId,productId)
    }

    @Mutation(()=> User)
    updateBookmarksRemove(
        @Arg('userId') userId: String ,
        @Arg('productId') productId: String
        ){
        return updateBookmarksRemove(userId,productId)
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
        return getAllUsers()
    }

    @Query(()=>User)
    getUserById(@Arg('userId') userId: String){
        return getUserById(userId)
    }

    @Query(()=>[Product])
    getSellerProducts(@Arg('userId') userId: String){
        return getSellerProducts(userId)
    }

    @Query(()=>[Product])
    getBookmarksForUser(@Arg('userId') userId: String){
        return getBookmarksForUser(userId)
    }

}
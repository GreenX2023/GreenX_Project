import User from "../schema/user.schema";
import { CreateUserInput} from "../schema/user.schema";
import { Query, Resolver,Mutation,Arg } from "type-graphql";
import { Product } from "../schema/product.schema";
import { UseMiddleware } from "type-graphql";
import UserService from "../greenxServices/user.service";
import { authMiddleware } from "../middleware/authmiddleware";


let user=new UserService()

@Resolver()
export default class UserResolver{

    @Mutation(()=> User)
    @UseMiddleware(authMiddleware)
    createUser(@Arg('input') input: CreateUserInput){
        return user.createUser(input)
    }
     
    @Mutation(()=>User)
     register(@Arg('input') input:CreateUserInput){
        return user.register(input) 
    }

    @Mutation(()=>String)
      login(
        @Arg("contactnum") contactnum:string,
        @Arg("password") password:string )
        {
           return user.login(contactnum,password)
        }

    @Mutation(()=>Boolean)
    logout(){
        return true
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
    @Query(()=>[Product])
    getNearByProductByUserLocation(@Arg('latitude') latitude: number, @Arg('longitude') longitude: number){
        return user.getNearByProductByUserLocation(longitude,latitude)
    }

}
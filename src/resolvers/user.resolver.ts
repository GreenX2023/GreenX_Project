
import {User, UserUpdateInput, loginUser} from "../schema/user.schema";
import { CreateUserInput} from "../schema/user.schema";
import { Query, Resolver,Mutation,Arg } from "type-graphql";
import { Product } from "../schema/product.schema";
import { UseMiddleware } from "type-graphql";
import UserService from "../greenxServices/user.service";
import { authMiddleware } from "../middleware/authmiddleware";
const UserModel = require('../models/User.model')

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

    @Mutation(()=>loginUser)
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

    @Mutation(()=> User,{nullable: true})
    updateBookmarksAdd(
        @Arg('userId') userId: String ,
        @Arg('productId') productId: String
        ){
        return user.updateBookmarksAdd(userId,productId)
    }

    
    @Mutation(()=> User,{nullable: true})
   async updateUser(
        @Arg("userId") userId: string,
        @Arg("data") data: UserUpdateInput
        ){
            try {
                const user = await UserModel.findById(userId);
            
                if (!user) {
                  throw new Error("User not found");
                }
            
                // Update the user properties with the data from the input
                if (data.role) user.role = data.role;
                if (data.name) user.name = data.name;
                if (data.email) user.email = data.email;
                if (data.password) user.password = data.password;
                if (data.contactnum) user.contactnum = data.contactnum;
                if (data.bio) user.bio = data.bio;
                if (data.address) user.address = data.address;
            
                // Save the updated user
                const updatedUser = await user.save();
            
                return updatedUser;
              } catch (error) {
                console.error("Error updating user:", error);
               throw new Error("Error updating user")
              }
    }


    @Mutation(()=> User,{nullable: true})
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
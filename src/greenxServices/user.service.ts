import { CreateUserInput } from "../schema/user.schema";
import { sign } from "jsonwebtoken";
const UserModel = require('../models/User.model')
const {ObjectId} = require('mongodb');
import { compare, hash } from "bcrypt";


export default class UserService{
    createUser = async (input: any) =>{
        const user = new UserModel(input);
        await user.save();
        return user
    }
    register=async(input:CreateUserInput)=>{
         const hashedPassword=await hash(input.password,12);
        const new_user=new UserModel({
                role:input.role,
                name:input.name,
                email:input.email,
                bio:input.bio,
                address:input.address,
                contactnum:input.contactnum,
                password:hashedPassword
        })

        await new_user.save()
        return new_user
    }
    login=async(email:string,password:string)=>{
        const existingUser=await UserModel.findOne({email}
        )
        if(!existingUser){
            throw new Error("Invalid login");
        }
        const passwordValid = await compare(password, existingUser.password);
        if(!passwordValid){
            throw new Error("Invalid login");
        }
        const token = sign({ userId: existingUser.id, userRole:existingUser.role }, process.env.JWT_SECRET!, {
            expiresIn: "1d",
          });

          await UserModel.findOneAndUpdate({token},{email})
          return token
    }
    updateBookmarksAdd = async(userId:any,productId:any)=>{
    
        let bookmarkproduct = new ObjectId(`${productId}`); 
        let doc = await UserModel.findOneAndUpdate({_id:userId},{ "$push": { "bookmarks": bookmarkproduct } }, {
            new: true
          });
        return doc
    }

    updateBookmarksRemove =  async(userId:any,productId:any)=>{
        let bookmarkproduct = new ObjectId(`${productId}`); 
        let doc = await UserModel.findOneAndUpdate({_id:userId},{ "$pull": { "bookmarks": bookmarkproduct } }, {
            new: true
          });  
     return doc
    }
    getAllUsers = async()=>{
        const result=await UserModel.find({}).populate('products')
        console.log(result)
        if(result){
            
            return result;
        }
        else{
            console.log('Error in getting users')
        }
    }
    getUserById = async(userId: any)=>{
        const result=await  UserModel.findOne({_id:userId});
        return result;
    }

    getSellerProducts = async(sellerID:any)=>{
        const user=await UserModel.find({_id:sellerID}).populate('products');
        return user[0].products
    }

    getBookmarksForUser = async(userId:any)=>{
        const user=await UserModel.find({_id:userId}).populate('bookmarks');
        return user[0].bookmarks;
    }
    
}

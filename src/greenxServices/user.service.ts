import { CreateUserInput } from "../schema/user.schema";
import { sign } from "jsonwebtoken";
const UserModel = require('../models/User.model')
const {ObjectId} = require('mongodb');
import { compare, hash } from "bcrypt";


export default class UserService{
    createUser = async (input: any) =>{
        try {
            const user = new UserModel(input);
            await user.save();
            return user
        } catch (error) {
            throw new Error(error)
        }
       
    }
   
    getNearByProductByUserLocation=async(longitude:number,latitude:number)=>{
        try {
           
            let productList:any=[]
            const users = await UserModel.find({
                location: {
                  $nearSphere: {
                    $geometry: {
                      type: 'Point',
                      coordinates: [latitude, longitude],
                    },
                    $maxDistance: 10000, // 30km in meters           
                  },
                },
              }).hint({ location: '2dsphere' }).populate('products');    

              console.log(users)
              for(let i=0;i<users.length;i++){
               productList= productList.concat(users[i].products)
              }
              return productList;
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
       
    }


    register=async(input:CreateUserInput)=>{
        try {
            console.log(input.location.type)
            const hashedPassword=await hash(input.password,12);
            const new_user=new UserModel({
                    name:input.name,
                    email:input.email,
                    contactnum:input.contactnum,
                    password:hashedPassword,
                    location:input.location
            })
    
            await new_user.save()
            return new_user
        } catch (error) {
            throw new Error(error)
        }   
    }
    login=async(contactnum:string,password:string)=>{

        try {
            const existingUser=await UserModel.findOne({contactnum}
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
        
                  await UserModel.findOneAndUpdate({token},{contactnum})
                  return {
                    token,
                    id:existingUser.id
                  }
        } catch (error) {
            throw new Error(error)
        }
       
    }
    updateBookmarksAdd = async(userId:any,productId:any)=>{
        try {
            let bookmarkproduct = new ObjectId(`${productId}`); 
            let doc = await UserModel.findOneAndUpdate({_id:userId},{ "$push": { "bookmarks": bookmarkproduct } }, {
                new: true
              });
            console.log(doc)
            return doc
            console.log(doc)
        } catch (error) {
            throw new Error(error)
        }
    
       
    }

    updateBookmarksRemove =  async(userId:any,productId:any)=>{
        try {
            let bookmarkproduct = new ObjectId(`${productId}`); 
            let doc = await UserModel.findOneAndUpdate({_id:userId},{ "$pull": { "bookmarks": bookmarkproduct } }, {
                new: true
              });  
             return doc
        } catch (error) {
            throw new Error(error)
        }
       
    }
    getAllUsers = async()=>{
        try {
            const result=await UserModel.find({}).populate('products')
            console.log(result)
            if(result){
                
                return result;
            }
            else{
                console.log('Error in getting users')
            }
        } catch (error) {
            throw new Error(error)
        }
       
    }
    getUserById = async(userId: any)=>{
        try {
            const result=await  UserModel.findOne({_id:userId}).populate("bookmarks");
            return result;
        } catch (error) {
            throw new Error(error)
        }
    
    }

    getSellerProducts = async(sellerID:any)=>{
        try {
            const user=await UserModel.find({_id:sellerID}).populate('products');
            return user[0].products
        } catch (error) {
            throw new Error(error)
        }
      
    }

    getBookmarksForUser = async(userId:any)=>{
        try {
            const user=await UserModel.find({_id:userId}).populate('bookmarks');
            return user[0].bookmarks;
        } catch (error) {
            throw new Error(error)
        }
       
    }
    
}

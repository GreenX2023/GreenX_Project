const UserModel = require('../models/User.model')

const {ObjectId} = require('mongodb');

// export default class UserService{
//     async createUser(input: any){
//         // return UserModel.create(input);
//         const user = new UserModel(input);
//           await user.save();
//         return user
      
//     }

// }

export const createUser = async (input: any) =>{
    const user = new UserModel(input);
    await user.save();
    return user
}

export const updateBookmarksAdd = async(userId:any,productId:any)=>{
    
    let bookmarkproduct = new ObjectId(`${productId}`); 
    let doc = await UserModel.findOneAndUpdate({_id:userId},{ "$push": { "bookmarks": bookmarkproduct } }, {
        new: true
      });
    return doc
}

export const updateBookmarksRemove =  async(userId:any,productId:any)=>{
    let bookmarkproduct = new ObjectId(`${productId}`); 
    let doc = await UserModel.findOneAndUpdate({_id:userId},{ "$pull": { "bookmarks": bookmarkproduct } }, {
        new: true
      });  
 return doc
}

export const getAllUsers = async()=>{
    const result=await UserModel.find({});
    if(result){
        return result;
    }
    else{
        console.log('Error in getting users')
    }
}

export const getUserById = async(userId: any)=>{
    const result=await  UserModel.findOne({_id:userId});
    return result;
}

export const getSellerProducts = async(sellerID:any)=>{
    const user=await UserModel.find({_id:sellerID}).populate('products');
    return user[0].products
}

export const getBookmarksForUser = async(userId:any)=>{
    const user=await UserModel.find({_id:userId}).populate('bookmarks');
    return user[0].bookmarks;
}


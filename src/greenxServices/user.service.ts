const UserModel = require('../models/User.model')
const {ObjectId} = require('mongodb');



export default class UserService{
    createUser = async (input: any) =>{
        const user = new UserModel(input);
        await user.save();
        return user
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
        const result=await UserModel.find({});
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

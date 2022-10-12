import { Schema, model} from 'mongoose';

interface User {
    role:string;
    name: string;
    email: string;
    password:string;
    contactnum:string;
    bio:string;
    address:string;
    products:[string]
    bookmarks:[string]
  }
  
  // 2. Create a Schema corresponding to the document interface.
  const UserModel = new Schema<User>({
            role:{
                type:String,
                required:true
            },
            name:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true
            },
            password:{
                type:String,
                required:true
            },
            contactnum:{
                type:String,
                required:true
            },
            bio:{
                type:String
            },
            address:{
                type:String
            },
            products:[{  type:'ObjectId', ref: 'Product' }],
            bookmarks:[{  type:'ObjectId', ref: 'Product' }]
    
  });
  
  // 3. Create a Model.
  module.exports = model<User>('User', UserModel);
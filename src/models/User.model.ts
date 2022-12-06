import { Schema, model} from 'mongoose';
var validate = require('mongoose-validator');


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
  
  var roleValidator = [
    validate({
      validator: 'isLength',
      arguments: [3, 15],
      message: 'Role should be between 3 and 15 characters'
    })
  ];

  var nameValidator = [
    validate({
      validator: 'isLength',
      arguments: [3, 50],
      message: 'Name should be between 3 and 50 characters'
    })
  ];
  

  const UserModel = new Schema<User>({
            role:{
                type:String,
                required: [true, 'Role is required.'],
                validate:roleValidator
            },
            name:{
                type:String,
                required: [true, 'Name is required.'],
                validate:nameValidator
            },
            email:{
              type:String,
              required: [true, 'Email is required.'],
              unique:true
            },
            password:{
                type:String,
                required: [true, 'Password is required.']
            },
            contactnum:{
                type:String,
                required: [true, 'Contact number is required.']
            },
            bio:{
                type:String,
                required: [true, 'Bio is required.']
            },
            address:{
                type:String,
                required: [true, 'Address is required.']
            },
            products:[{  type:'ObjectId', ref: 'Product' }],
            bookmarks:[{  type:'ObjectId', ref: 'Product' }]
    
  });
  
  // 3. Create a Model.
  module.exports = model<User>('User', UserModel);
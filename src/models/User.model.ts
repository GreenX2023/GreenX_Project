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
    token:string
    location: {
      type: 'Point';
      coordinates: [number, number];
    };
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
                default:"user",
                validate:roleValidator
            },
            name:{
                type:String,
                required: [true, 'Name is required.'],
                validate:nameValidator
            },
            email:{
              type:String,
              unique:true
            },
            password:{
                type:String,
                required: [true, 'Password is required.']
            },
            contactnum:{
                type:String,
                required: [true, 'Contact number is required.'],
                unique:true
            },
            bio:{
                type:String,
            },
            address:{
                type:String
            },

            products:[{  type:'ObjectId', ref: 'Product' }],
            bookmarks:[{  type:'ObjectId', ref: 'Product' }],

            
            location: {
              type: {
                type:String,
                enum: ['Point'],
                default:'Point'
              },
              coordinates: {
                type: [Number],
                required: true,
              }
            }
              ,
            token:{
              type:String,
            }
    
  });
  UserModel.index({ location: '2dsphere' });
  // // 3. Create a Model.
  // Create a 2dsphere index on the location field

  module.exports = model<User>('User', UserModel);

 
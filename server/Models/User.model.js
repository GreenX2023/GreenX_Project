const mongoose=require('mongoose');
const { Schema } = mongoose;

//role: 1-admin    0-loggedUser

const UserSchema= new mongoose.Schema({
    Role:{
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
    Bio:{
        type:String
    },
    address:{
        type:String
    },
    products:[{  type:'ObjectId', ref: 'Product' }],
    bookmarks:[{  type:'ObjectId', ref: 'Product' }]
}
,
{ timestamps: true }
);

module.exports= new mongoose.model('User',UserSchema);
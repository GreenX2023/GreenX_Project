const mongoose=require('mongoose');


const ProductSchema= new mongoose.Schema({
  
    subcategoryID:{
        type:String,
        required:true
    },
    sellerID:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number
    },
    description:{
        type:String,
    },
    quantity:{
        type:String,
        required:true
    },
    images:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
   
}
,
{ timestamps: true }
);

module.exports= new mongoose.model('Product',ProductSchema);
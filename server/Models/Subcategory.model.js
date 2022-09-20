const mongoose=require('mongoose');
const { Schema } = mongoose;

const SubCategorySchema= new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  categoryID:{
    type:String,
    required:true
  },
  productList:[{  type:'ObjectId', ref: 'Product' }],
 

}
,
{ timestamps: true }
);

module.exports= new mongoose.model('Subcategory',SubCategorySchema);
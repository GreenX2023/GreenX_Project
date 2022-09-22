const mongoose=require('mongoose');
const { Schema } = mongoose;

const CategorySchema= new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  subCategoryList:[{ type:'ObjectId', ref: 'Category' }],
  productList:[{ type:'ObjectId', ref: 'Product' }]
 
}
,
{ timestamps: true }
);

module.exports= new mongoose.model('Category',CategorySchema);
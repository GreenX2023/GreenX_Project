const mongoose = require('mongoose')
export {}
const CategoryModel= new mongoose.Schema({
  name:{
    type:String,
    required:true
  },// add Description field for category
  // add Image field for category
  subCategoryList:[{ type:'ObjectId', ref: 'Category' }],
  productList:[{ type:'ObjectId', ref: 'Product' }]
}
,
{ timestamps: true }
);

module.exports= new mongoose.model('Category',CategoryModel);

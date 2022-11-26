const mongoose = require('mongoose')
export {}
const CategoryModel= new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  description:{                             //new
    type:String,
  },
  image:{                                   //new
    type:String,
    // required:true
  },
  subCategoryList:[{ type:'ObjectId', ref: 'Category' }],
  productList:[{ type:'ObjectId', ref: 'Product' }]
}
,
{ timestamps: true }
);

module.exports= new mongoose.model('Category',CategoryModel);

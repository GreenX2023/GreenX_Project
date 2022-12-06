const mongoose = require('mongoose')
var validate = require('mongoose-validator');

var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Name should be between 3 and 50 characters'
  })
];



var descriptionValidator = [
  validate({
    validator: 'isLength',
    arguments: [50, 500],
    message: 'Descrition should be between 50 and 500 characters'
  })
];

export {}



const CategoryModel= new mongoose.Schema({
  name:{
    type:String,
    required:true,
    validate: nameValidator
  },
  description:{                             //new
    type:String,
    required:true,
    validate: descriptionValidator
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

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
    required: [true, 'Name is required.'],
    validate: nameValidator
  },
  description:{                             //new
    type:String,
    required: [true, 'Description is required.'],
    validate: descriptionValidator
  },
  isCategory:{
    type:Boolean,
    default:false
  },
  image:{                                   //new
    type:String,
    // required:true
  },
  subCategoryList:[{
    type: String
  }],
  productList:[{ type:'ObjectId', ref: 'Product' }]
}
,
{ timestamps: true }
);

module.exports= new mongoose.model('Category',CategoryModel);

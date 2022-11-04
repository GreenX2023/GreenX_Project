"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const CategoryModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // add Description field for category
    description: {
        type: String,
    },
    // add Image field for category
    image: {
        type: String,
        // required:true
    },
    subCategoryList: [{ type: 'ObjectId', ref: 'Category' }],
    productList: [{ type: 'ObjectId', ref: 'Product' }]
}, { timestamps: true });
module.exports = new mongoose.model('Category', CategoryModel);
//# sourceMappingURL=Category.model.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var validate = require('mongoose-validator');
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
const UserModel = new mongoose_1.Schema({
    role: {
        type: String,
        required: [true, 'Role is required.'],
        validate: roleValidator
    },
    name: {
        type: String,
        required: [true, 'Name is required.'],
        validate: nameValidator
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required.']
    },
    contactnum: {
        type: String,
        required: [true, 'Contact number is required.']
    },
    bio: {
        type: String,
        required: [true, 'Bio is required.']
    },
    address: {
        type: String,
        required: [true, 'Address is required.']
    },
    products: [{ type: 'ObjectId', ref: 'Product' }],
    bookmarks: [{ type: 'ObjectId', ref: 'Product' }],
    token: {
        type: String,
        required: true
    }
});
// 3. Create a Model.
module.exports = (0, mongoose_1.model)('User', UserModel);
//# sourceMappingURL=User.model.js.map
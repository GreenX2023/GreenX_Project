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
        default: "user",
        validate: roleValidator
    },
    name: {
        type: String,
        required: [true, 'Name is required.'],
        validate: nameValidator
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required.']
    },
    contactnum: {
        type: String,
        required: [true, 'Contact number is required.'],
        unique: true
    },
    bio: {
        type: String,
    },
    address: {
        type: String
    },
    products: [{ type: 'ObjectId', ref: 'Product' }],
    bookmarks: [{ type: 'ObjectId', ref: 'Product' }],
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            required: true,
        }
    },
    token: {
        type: String,
    }
});
// 3. Create a Model.
module.exports = (0, mongoose_1.model)('User', UserModel);
//# sourceMappingURL=User.model.js.map
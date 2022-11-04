"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const UserModel = new mongoose_1.Schema({
    role: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contactnum: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    address: {
        type: String
    },
    products: [{ type: 'ObjectId', ref: 'Product' }],
    bookmarks: [{ type: 'ObjectId', ref: 'Product' }]
});
// 3. Create a Model.
module.exports = (0, mongoose_1.model)('User', UserModel);
//# sourceMappingURL=User.model.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel = require('../models/User.model');
const { ObjectId } = require('mongodb');
class UserService {
    constructor() {
        this.createUser = async (input) => {
            const user = new UserModel(input);
            await user.save();
            return user;
        };
        this.updateBookmarksAdd = async (userId, productId) => {
            let bookmarkproduct = new ObjectId(`${productId}`);
            let doc = await UserModel.findOneAndUpdate({ _id: userId }, { "$push": { "bookmarks": bookmarkproduct } }, {
                new: true
            });
            return doc;
        };
        this.updateBookmarksRemove = async (userId, productId) => {
            let bookmarkproduct = new ObjectId(`${productId}`);
            let doc = await UserModel.findOneAndUpdate({ _id: userId }, { "$pull": { "bookmarks": bookmarkproduct } }, {
                new: true
            });
            return doc;
        };
        this.getAllUsers = async () => {
            const result = await UserModel.find({});
            console.log(result);
            if (result) {
                return result;
            }
            else {
                console.log('Error in getting users');
            }
        };
        this.getUserById = async (userId) => {
            const result = await UserModel.findOne({ _id: userId });
            return result;
        };
        this.getSellerProducts = async (sellerID) => {
            const user = await UserModel.find({ _id: sellerID }).populate('products');
            return user[0].products;
        };
        this.getBookmarksForUser = async (userId) => {
            const user = await UserModel.find({ _id: userId }).populate('bookmarks');
            return user[0].bookmarks;
        };
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.js.map
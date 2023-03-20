"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const UserModel = require('../models/User.model');
const { ObjectId } = require('mongodb');
const bcrypt_1 = require("bcrypt");
class UserService {
    constructor() {
        this.createUser = async (input) => {
            const user = new UserModel(input);
            await user.save();
            return user;
        };
        this.register = async (input) => {
            const hashedPassword = await (0, bcrypt_1.hash)(input.password, 12);
            const new_user = new UserModel({
                role: input.role,
                name: input.name,
                email: input.email,
                bio: input.bio,
                address: input.address,
                contactnum: input.contactnum,
                password: hashedPassword
            });
            await new_user.save();
            return new_user;
        };
        this.login = async (email, password) => {
            const existingUser = await UserModel.findOne({ email });
            if (!existingUser) {
                throw new Error("Invalid login");
            }
            const passwordValid = await (0, bcrypt_1.compare)(password, existingUser.password);
            if (!passwordValid) {
                throw new Error("Invalid login");
            }
            const token = (0, jsonwebtoken_1.sign)({ userId: existingUser.id, userRole: existingUser.role }, process.env.JWT_SECRET, {
                expiresIn: "1d",
            });
            await UserModel.findOneAndUpdate({ token }, { email });
            return token;
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
            const result = await UserModel.find({}).populate('products');
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
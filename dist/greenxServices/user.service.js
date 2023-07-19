"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const UserModel = require('../models/User.model');
const { ObjectId } = require('mongodb');
const bcrypt_1 = require("bcrypt");
class UserService {
    constructor() {
        this.createUser = async (input) => {
            try {
                const user = new UserModel(input);
                await user.save();
                return user;
            }
            catch (error) {
                throw new Error(error);
            }
        };
        this.getNearByProductByUserLocation = async (longitude, latitude) => {
            try {
                let productList = [];
                const users = await UserModel.find({
                    location: {
                        $nearSphere: {
                            $geometry: {
                                type: 'Point',
                                coordinates: [latitude, longitude],
                            },
                            $maxDistance: 10000, // 30km in meters           
                        },
                    },
                }).hint({ location: '2dsphere' }).populate('products');
                for (let i = 0; i < users.length; i++) {
                    productList = productList.concat(users[i].products);
                }
                return productList;
            }
            catch (error) {
                console.log(error);
                throw new Error(error);
            }
        };
        this.register = async (input) => {
            try {
                console.log(input.location.type);
                const hashedPassword = await (0, bcrypt_1.hash)(input.password, 12);
                const new_user = new UserModel({
                    name: input.name,
                    email: input.email,
                    contactnum: input.contactnum,
                    password: hashedPassword,
                    location: input.location
                });
                await new_user.save();
                return new_user;
            }
            catch (error) {
                throw new Error(error);
            }
        };
        this.login = async (contactnum, password) => {
            try {
                const existingUser = await UserModel.findOne({ contactnum });
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
                await UserModel.findOneAndUpdate({ token }, { contactnum });
                return {
                    token,
                    id: existingUser.id
                };
            }
            catch (error) {
                throw new Error(error);
            }
        };
        this.updateBookmarksAdd = async (userId, productId) => {
            try {
                let bookmarkproduct = new ObjectId(`${productId}`);
                let doc = await UserModel.findOneAndUpdate({ _id: userId }, { "$push": { "bookmarks": bookmarkproduct } }, {
                    new: true
                });
                console.log(doc);
                return doc;
                console.log(doc);
            }
            catch (error) {
                throw new Error(error);
            }
        };
        this.updateBookmarksRemove = async (userId, productId) => {
            try {
                let bookmarkproduct = new ObjectId(`${productId}`);
                let doc = await UserModel.findOneAndUpdate({ _id: userId }, { "$pull": { "bookmarks": bookmarkproduct } }, {
                    new: true
                });
                return doc;
            }
            catch (error) {
                throw new Error(error);
            }
        };
        this.getAllUsers = async () => {
            try {
                const result = await UserModel.find({}).populate('products');
                console.log(result);
                if (result) {
                    return result;
                }
                else {
                    console.log('Error in getting users');
                }
            }
            catch (error) {
                throw new Error(error);
            }
        };
        this.getUserById = async (userId) => {
            try {
                const result = await UserModel.findOne({ _id: userId }).populate("bookmarks");
                return result;
            }
            catch (error) {
                throw new Error(error);
            }
        };
        this.getSellerProducts = async (sellerID) => {
            try {
                const user = await UserModel.find({ _id: sellerID }).populate('products');
                return user[0].products;
            }
            catch (error) {
                throw new Error(error);
            }
        };
        this.getBookmarksForUser = async (userId) => {
            try {
                const user = await UserModel.find({ _id: userId }).populate('bookmarks');
                return user[0].bookmarks;
            }
            catch (error) {
                throw new Error(error);
            }
        };
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.js.map
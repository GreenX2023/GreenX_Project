"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductModel = require('../models/Product.model');
const UserModel = require('../models/User.model');
const CategoryModel = require('../models/Category.model');
const { uploadImage } = require("../helper/cloudinary.upload");
class ProductService {
    constructor() {
        this.createProduct = async (input) => {
            try {
                const { name, description, price, quantity, location, sellerID, categoryID, images } = input;
                const uploadimages = await Promise.all(images.map(async (image) => {
                    try {
                        const photoUrl = image && (await uploadImage(image));
                        return photoUrl;
                    }
                    catch (error) {
                        throw new Error(`Error uploading image: ${error.message}`);
                    }
                }));
                if (input.sellerID.length != 24 || input.categoryID.length != 24) {
                    throw new Error("Please provide valid seller and Customer ID");
                }
                const user = await UserModel.find({ _id: input.sellerID });
                const category = await CategoryModel.find({ _id: input.categoryID });
                if (user.length == 0) {
                    throw new Error("Please provide valid seller ID");
                }
                if (category.length == 0) {
                    throw new Error("Please provide valid Category ID");
                }
                const product = new ProductModel({
                    name,
                    price,
                    description,
                    quantity,
                    images: uploadimages,
                    location,
                    categoryID,
                    sellerID
                });
                await product.save();
                let sellerId = product.sellerID;
                let productid = product._id;
                let catid = product.categoryID;
                await UserModel.findOneAndUpdate({ _id: sellerId }, { "$push": { "products": productid } }, {
                    new: true
                });
                await CategoryModel.findOneAndUpdate({ _id: catid }, { "$push": { "productList": productid } }, {
                    new: true
                });
                return product;
            }
            catch (error) {
                throw new Error(error);
            }
        };
        this.getAllProducts = async () => {
            const result = await ProductModel.find({});
            if (result) {
                return result;
            }
            else {
                throw new Error('Error in getting products');
            }
        };
        this.getProductById = async (productID) => {
            if (productID.length != 24) {
                throw new Error("Product ID must be of Length 24");
            }
            const result = await ProductModel.findOne({ _id: productID });
            return result;
        };
        this.getProductByName = async (productName) => {
            if (productName.length == 0) {
                throw new Error("Product Name is Empty");
            }
            const result = await ProductModel.findOne({ name: productName });
            return result;
        };
    }
}
exports.default = ProductService;
//# sourceMappingURL=product.service.js.map
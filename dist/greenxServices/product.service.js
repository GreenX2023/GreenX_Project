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
                const { name, description, price, quantity, sellerID, categoryID, images } = input;
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
        this.addImageInProduct = async (productID, image) => {
            try {
                const product = await ProductModel.findOne({ _id: productID });
                if (!product) {
                    throw new Error("Invalid Product ID");
                }
                const photoUrl = image && (await uploadImage(image));
                const addNewImage = await ProductModel.findOneAndUpdate({ _id: productID }, { "$push": { "images": photoUrl } }, {
                    new: true
                });
                return addNewImage;
            }
            catch (error) {
                throw new Error(error);
            }
        };
        this.removeImageFromProduct = async (productID, imageUrl) => {
            try {
                const product = await ProductModel.findOne({ _id: productID, images: imageUrl });
                if (!product) {
                    throw new Error("Please provide Valid productID and imageUrl");
                }
                const removeImage = await ProductModel.findOneAndUpdate({ _id: productID }, { "$pull": { "images": imageUrl } }, {
                    new: true
                });
                return removeImage;
            }
            catch (error) {
                throw new Error(error);
            }
        };
        this.getAllProducts = async () => {
            try {
                const result = await ProductModel.find({});
                if (result) {
                    return result;
                }
                else {
                    throw new Error('Error in getting products');
                }
            }
            catch (error) {
                throw new Error('Error in getting products ' + error);
            }
        };
        this.getProductById = async (productID) => {
            try {
                if (productID.length != 24) {
                    throw new Error("Product ID must be of Length 24");
                }
                const result = await ProductModel.findOne({ _id: productID });
                return result;
            }
            catch (error) {
                throw new Error('Error in getting product By Id ' + error);
            }
        };
        this.getProductByName = async (productName) => {
            try {
                if (productName.length == 0) {
                    throw new Error("Product Name is Empty");
                }
                const result = await ProductModel.findOne({ name: productName });
                return result;
            }
            catch (error) {
                throw new Error('Error in getting product By Name ' + error);
            }
        };
        this.updateProduct = async (productId, name, price, description, quantity) => {
            try {
                const product = await ProductModel.findOne({
                    _id: productId
                });
                if (!product) {
                    throw new Error('Please provide valid productID');
                }
                const productUpdate = await ProductModel.findOneAndUpdate({
                    _id: productId
                }, {
                    name,
                    price,
                    description,
                    quantity
                });
                return productUpdate;
            }
            catch (error) {
                throw new Error(error);
            }
        };
        this.deleteProduct = async (productID) => {
            try {
                const product = await ProductModel.findOne({
                    _id: productID
                });
                if (!product) {
                    throw new Error('Please provide valid productID');
                }
                const categoryId = product.categoryID;
                const sellerID = product.sellerID;
                await CategoryModel.findOneAndUpdate({
                    _id: categoryId
                }, {
                    "$pull": { "productList": productID }
                });
                await UserModel.findOneAndUpdate({
                    _id: sellerID
                }, {
                    "$pull": { "products": productID }
                });
                const deleteProduct = await ProductModel.deleteOne({
                    _id: productID
                });
                if (deleteProduct.deletedCount == 1) {
                    return "Deleted Successfully";
                }
                return "Deletion UnSuccessfull";
            }
            catch (error) {
                throw new Error(error);
            }
        };
    }
}
exports.default = ProductService;
//# sourceMappingURL=product.service.js.map
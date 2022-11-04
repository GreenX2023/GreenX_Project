"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductModel = require('../models/Product.model');
const UserModel = require('../models/User.model');
const CategoryModel = require('../models/Category.model');
class ProductService {
    constructor() {
        this.createProduct = async (input) => {
            const product = new ProductModel(input);
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
        };
        this.getAllProducts = async () => {
            const result = await ProductModel.find({});
            if (result) {
                return result;
            }
            else {
                console.log('Error in getting products');
            }
        };
        this.getProductById = async (productID) => {
            const result = await ProductModel.findOne({ _id: productID });
            return result;
        };
        /**
        * @description gets product details from the database
        *
        * @param {string} productName - provide the name of the product to fetch
        *
        * @returns {{_id: string, name: string, productList: string[]}} product details
        */
        this.getProductByName = async (productName) => {
            const result = await ProductModel.findOne({ name: productName });
            return result;
        };
    }
}
exports.default = ProductService;
//# sourceMappingURL=product.service.js.map
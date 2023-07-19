const mongoose = require('mongoose');
let Schema = mongoose.Schema;
var validate = require('mongoose-validator');
var nameValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 50],
        message: 'Name should be between 3 and 50 characters'
    })
];
var descriptionValidator = [
    validate({
        validator: 'isLength',
        arguments: [50, 500],
        message: 'Descripton should be between 50 and 500 characters'
    })
];
var locationValidator = [
    validate({
        validator: 'isLength',
        arguments: [10, 200],
        message: 'Location should be between 10 and 200 characters'
    })
];
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        validate: nameValidator,
        required: [true, 'name is required.']
    },
    price: {
        type: Number,
        required: [true, 'Price is required.']
    },
    description: {
        type: String,
        validate: descriptionValidator,
        required: [true, 'Description is required.']
    },
    quantity: {
        type: String,
        required: [true, 'Quantity is required.']
    },
    images: {
        type: [String],
        // required:true
    },
    categoryID: {
        type: String,
        required: [true, 'Category is required.']
    },
    sellerID: {
        type: String,
        required: [true, 'Seller is required.']
    },
    rating: {
        type: Number,
        default: 0
    },
    pincode: {
        type: String,
        required: [true, 'Pincode is required.']
    },
    city_name: {
        type: String
    },
    feedbacks: [{
            user: {
                type: String,
            },
            feedbackId: {
                type: String
            },
            rating: {
                type: Number,
                min: 1,
                max: 5
            },
            comment: {
                type: String
            }
        }]
}, { timestamps: true });
ProductSchema.pre('save', function (next) {
    if (!ProductSchema.feedbackId) {
        ProductSchema.feedbackId = `${ProductSchema._id}-${Date.now()}`;
    }
    next();
});
ProductSchema.index({ name: "text" });
module.exports = new mongoose.model('Product', ProductSchema);
//# sourceMappingURL=Product.model.js.map
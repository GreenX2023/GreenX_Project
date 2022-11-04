const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    description: {
        type: String,
    },
    quantity: {
        type: String,
        required: true
    },
    images: {
        type: String,
        // required:true
    },
    location: {
        type: String,
        required: true
    },
    categoryID: {
        type: String,
        required: true
    },
    sellerID: {
        type: String,
        required: true
    }
}, { timestamps: true });
module.exports = new mongoose.model('Product', ProductSchema);
//# sourceMappingURL=Product.model.js.map
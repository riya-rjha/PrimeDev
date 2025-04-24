const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    price: Number,
    stock: {
        type: Number,
        default: 1,
        min: 0,
    }
});

const ProductModel = mongoose.model("product", productSchema);

// Schema - Model - Document

module.exports = {
    ProductModel
}
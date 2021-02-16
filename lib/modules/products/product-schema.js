"use strict";

let mongoose = require('mongoose');

let productsSchema = mongoose.Schema({
    name: { type: String, required: true },
    display_name: { type: String },
    description: { type: String },
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    category: { type: String, required: true }
})

module.exports = mongoose.model('products', productsSchema);


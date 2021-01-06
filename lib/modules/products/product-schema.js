"use strict";

let mongoose = require('mongoose');

let productsSchema = mongoose.Schema({
    name: { type: String, required: true },
    display_name: { type: String },
    description: { type: String }
})

module.exports = mongoose.model('products', productsSchema);


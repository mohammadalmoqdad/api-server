const productsSchema = require('./product-schema');
const Module = require('../golbalModule');

class Product extends Module{
    constructor(){
        super(productsSchema)
    }
}

module.exports = new Product();
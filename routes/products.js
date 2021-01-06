
let express = require('express');
let router = express.Router();
let products_collection = require('../lib/modules/products/product-collection');


// producs Routes : 
router.post('/products', postProductHandler);
router.get('/products', getProductsHandler);
router.get('/products/:id', getProductsHandler);
router.put('/products/:id', putProductBYIDHandler);
router.delete('/products/:id', deleteProductHandler);



// Products Handlers :  
function postProductHandler(req, res, next) {
    products_collection.create(req.body).then(result => {
        res.status(201).json(result)
    })
        .catch(err => {
            console.log(err);
            next(err)
        })

}


function getProductsHandler(req, res, next) {
    products_collection.get(req.params.id).then(result => {
        res.status(200).json(result);
    })
        .catch(e => {
            next(e)
        })
}


function putProductBYIDHandler(req, res, next) {
    let id = req.params.id;
    products_collection.update(id, req.body).then(result => {
        res.status(201).json(result)
    })
        .catch(e => {
            console.log(e);
            next(e)
        })
}


function deleteProductHandler(req, res, next) {
    let id = req.params.id;
    products_collection.delete(id).then(result => {
        res.status(201).json(result);
    })
        .catch(e => {
            console.log(e);
            next(e)
        })
}


module.exports = router;
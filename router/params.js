const express = require('express');
const products = require('../lib/modules/products/product-collection');
const catigories = require('../lib/modules/catigories/categories-collection');
const router = express.Router();



router.get('/:model', getHandler);
router.get('/:model/:id', getHandler);
router.post('/:model', postHandler);
router.put('/:model/:id', putHandler);
router.delete('/:model/:id', deleteHandler)


// trigger getModel middleware
router.param('model', getModel);

function getModel(req, res, next) {
    let model = req.params.model;
    switch (model) {
        case "products":
            req.model = products;
            next();
            break;  
        case "categories":
            req.model = catigories;
            next();
            break;
        default:
            next("this is invalid url"); // pass the error using next
            break;

    }
}

function getHandler(req, res, next) {
    // get items or item
    req.model.get(req.params.id).then(results => {
        let count = results.length;
        res.status(200).json({ count, results });
    }).catch(next);
}




function postHandler(req, res, next) {
    req.model.create(req.body).then(result => {
        res.status(201).json(result);
    }).catch(next);
}



function putHandler(req, res, next) {
    let id = req.params.id;
    req.model.update(id, req.body).then(result => {
        res.status(201).json(result);
    }).catch(next);
}

function deleteHandler(req, res, next) {
    let id = req.params.id;
    req.model.delete(id).then(result => {
        res.status(201).json(result);
    }).catch(next);
}

module.exports = router;
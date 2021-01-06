const express = require('express');
const router = express.Router();
let catigories_collection = require('../lib/modules/catigories/categories-collection');




//  categories routes
router.post('/categories', postcategoriesHanler);
router.get('/categories', getcategoriesHandler)
router.get('/categories/:id', getcategoriesHandler)
router.put('/categories/:id', putcategoriesHandler)
router.delete('/categories/:id', deletecategoriesHandler);






//  categories Handlers :
function postcategoriesHanler(req, res, next) {
    catigories_collection.create(req.body).then(result => {
        res.status(201).json(result);
    })
        .catch(e => {
            console.log(e);
            next(e)
        })
}


function getcategoriesHandler(req, res, next) {
    catigories_collection.get(req.params.id).then(result => {
        res.status(200).json(result);
    })
        .catch(e => {
            console.log(e);
            next(e)
        })
}



function putcategoriesHandler(req, res, next) {
    catigories_collection.update(req.params.id, req.body).then(result => {
        res.status(201).json(result);
    })
        .catch(e => {
            console.log(e);
            next(e)
        })
}


function deletecategoriesHandler(req, res, next) {
    let id = req.params.id;
    catigories_collection.delete(id).then(result => {
        res.status(201).json(result);
    })
        .catch(e => {
            console.log(e);
            next(e)
        })
}


module.exports = router;
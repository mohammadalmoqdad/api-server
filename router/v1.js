const express = require('express');
const products = require('../lib/modules/products/product-collection');
const catigories = require('../lib/modules/catigories/categories-collection');

const router = express.Router();



router.get('/api/v1/:model', getHandler);

router.get('/api/v1/:model/:id', getHandler);

router.post('/api/v1/:model/', postHandler);




// trigger getModel middleware
router.param('model', getModel);

function getModel(req, res, next) {
    let model = req.params.model;
  switch(model){
      case "products":
          req.model = "products"
          next();
          break;
      case "catigories":
          req.model = "catigories"
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
        res.json({ count, results });
    }).catch(next);
}

function postHandler(req, res, next) {
    req.model.create(req.body).then(result => {
        res.json(result);
    }).catch(next);
}


module.exports = router;
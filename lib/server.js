'use strict'
let express = require('express');
let server = express();
// let data = require('../data/db.json');





// ______________________________  Middlewares ____________________________________
// Global middleware


let requestTime = require('../middleware/timestamp.js');
let logger = require('../middleware/logger.js')
let notFound = require('../middleware/404.js');
let serverError = require('../middleware/500.js');
const { json } = require('express');
server.use(requestTime);
server.use(logger);
server.use(express.json())




let db = {
    "categories": [
        {
            "id": 1,
            "name": "electronics",
            "display_name": "category -2-",
            "description": "this is a descreption of -1-"
        },
        {
            "id": 2,
            "name": "electronics",
            "display_name": "category -2-",
            "description": "this is a descreption of -2-"
        }
    ],
    "products": [
        {
            "id": 1,
            "name": "samsung tablet",
            "display_name": "tablet",
            "category": "smart devices",
            "description": "this is a descreption of -1-"
        },
        {
            "id": 2,
            "name": "samsung tablet",
            "display_name": "tablet",
            "category": "smart devices",
            "description": "this is a descreption of -1-"
        }
    ]
};




// ______________________________  Routes ____________________________________
// Products
server.post('/products', postProductHandler);
server.get('/products', getProductsHandler)
server.get('/products/:id', getProductByIdHandler)
server.put('/products/:id', putProductBYIDHandler)
server.delete('/products/:id', deleteProductHandler);


//categories
server.post('/categories', postcategoriesHanler);
server.get('/categories', getcategoriesHandler)
server.get('/categories/:id', getcategoryByID)
server.put('/categories/:id', putcategoriesHandler)
server.delete('/categories/:id', deletecategoriesHandler);



// Products Handlers :  
function postProductHandler(req, res) {
    console.log(req.body)
    db.products.push(req.body)
    res.status(201);
    res.json(db.products)
    console.log(db.products);
}


function getProductsHandler(req, res) {
    let products = db.products.map(result => {
        return result
    })
    console.log(products)
    res.status(200);
    res.json(products);
}


function getProductByIdHandler(req, res) {
    let id = req.params.id;
    let wantedProdect = db.products.filter(result => {
        if (result.id == id) {
            return result;
        }
    })
    console.log(wantedProdect)
    res.status(200);
    res.json(wantedProdect)
}


function putProductBYIDHandler(req, res) {
    let id = req.params.id;
    let newVal = req.body;
    let updateRecord = db.products.filter(result => {
        if (result.id == id) {
            result.name = newVal.name;
            return result
        }
    })
    console.log(updateRecord);
    res.status(201);
    res.json(updateRecord);
}


function deleteProductHandler(req, res) {
    let x = db.products
    let id = req.params.id;
    db.products.forEach((ele, idx) => {
        if (ele.id == id) {
            db.products.splice(idx, 1)
        }
    });
    res.status(201);
    res.json(db.products)
}










// categories Handlers :
function postcategoriesHanler(req, res) {
    console.log(req.body)
    db.categories.push(req.body)
    res.status(201);
    res.json(db.categories)
    console.log(db.categories);
}


function getcategoriesHandler(req, res) {
    let categories = db.categories.map(result => {
        return result
    })
    console.log(categories)
    res.status(200);
    res.json(categories);
}


function getcategoryByID(req, res) {
    let id = req.params.id;
    let wantedProdect = db.categories.filter(result => {
        if (result.id == id) {
            return result;
        }
    })
    console.log(wantedProdect)
    res.status(200);
    res.json(wantedProdect)
}


function putcategoriesHandler(req, res) {
    let id = req.params.id;
    let newVal = req.body;
    let updateRecord = db.categories.filter(result => {
        if (result.id == id) {
            result.name = newVal.name;
            return result
        }
    })
    console.log(updateRecord);
    res.status(201);
    res.json(updateRecord);
}


function deletecategoriesHandler(req, res) {
    let id = req.params.id;
    db.categories.forEach((ele, idx) => {
        if (ele.id == id) {
            db.categories.splice(idx, 1)
        }
    });
    res.status(201);
    res.json(db.categories)

}






// errors Middlwares
server.use(notFound);
server.use(serverError);

module.exports = {
    server: server,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        server.listen(PORT, () => console.log(`listining on port: ${PORT}`));
    }
}
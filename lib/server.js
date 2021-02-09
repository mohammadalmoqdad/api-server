'use strict'
let express = require('express');
let router = express();
let proAndCatRoutesAndTodo = require('../router/params')
const cors = require('cors');
const morgan = require('morgan');
router.use(express.json());
router.use(cors());
router.use(morgan('dev'));



// Global middleware
let requestTime = require('../middleware/timestamp.js');
let notFound = require('../middleware/404.js');
let serverError = require('../middleware/500.js');
router.use(requestTime);




// Main Routes
router.use(proAndCatRoutesAndTodo);




// errors Middlwares
router.use(notFound);
router.use(serverError);



module.exports = {
    server: router,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        router.listen(PORT, () => console.log(`listining on port: ${PORT}`));
    }
}
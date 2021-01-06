'use strict'
let express = require('express');
let router = express();
let productRoutes = require('../routes/products')
let catigoriesRoute = require('../routes/catigories');
const cors = require('cors');
const morgan = require('morgan');

router.use(express.json());
router.use(cors());
router.use(morgan('dev'));



// Global middleware
let requestTime = require('../middleware/timestamp.js');
let notFound = require('../middleware/404.js');
let serverError = require('../middleware/500.js');
// let logger = require('../middleware/logger.js') // we used morgan instead of it
// router.use(logger);
router.use(requestTime);




// Main Routes
router.use(productRoutes);
router.use(catigoriesRoute);




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
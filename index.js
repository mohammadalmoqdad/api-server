let server = require('./lib/server.js');
require('dotenv');

let mongoose = require('mongoose');
let MONGOOSE_URI = "mongodb://localhost:27017/lab8Store"

mongoose.connect(MONGOOSE_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

server.start(); // mongoose before it because i need the mongoose to be working before i start my server
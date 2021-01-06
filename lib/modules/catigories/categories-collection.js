const catigoriesSchema = require('./categories-schema');
const Module = require('../golbalModule.js');

class catigories extends Module{
    constructor(){
        super(catigoriesSchema)
    }

}

module.exports = new catigories();
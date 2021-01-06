'use strict';

let mongoose = require('mongoose');

let catigory = mongoose.Schema({
    name: {type:String, required:true},
    display_name:{type: String, required: true},
    description: {type: String, required: false}
});

module.exports = mongoose.model('catigory', catigory);




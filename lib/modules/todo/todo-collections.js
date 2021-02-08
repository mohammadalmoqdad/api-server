const todo_schema = require('./todo-schema');
const Module = require('../golbalModule.js');

class Todos extends Module {
    constructor() {
        super(todo_schema)
    }

}

module.exports = new Todos();
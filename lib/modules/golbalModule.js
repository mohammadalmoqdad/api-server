'use strict';

class Module {
    constructor(schema) {
        this.schema = schema;
    }

    create(record) {
        let newObj = new this.schema(record);
        return newObj.save();
    }

    get(_id) {
        let id = _id ? { _id } : {};
        return this.schema.find(id);
    }

    update(_id, record) {
        return this.schema.findByIdAndUpdate(_id, record);
    }

    delete(_id) {
        return this.schema.findByIdAndDelete(_id);
    }

}

module.exports = Module;
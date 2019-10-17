"use strict";
const mongooseInModels = require('mongoose');
const Schema = mongooseInModels.Schema;
const Todo = new Schema({
    content: {
        type: String
    },
    isCompleted: {
        type: Boolean
    },
    isEditing: {
        type: Boolean
    }
});
module.exports = mongooseInModels.model('Todo', Todo);

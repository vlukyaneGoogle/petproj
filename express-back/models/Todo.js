const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
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

module.exports = mongoose.model('Todo', Todo);
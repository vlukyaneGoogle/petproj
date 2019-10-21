import mongoose from 'mongoose'

const Schema = mongoose.Schema;
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

export default mongoose.model('Todo', Todo);

const TodoModel = require('../../models/mongo-models/Todo');

const getAllTodosMongo = async () => {
    try {
        return await TodoModel.find();
    } catch (err) {
        console.log('Error occurred while getting all todos in service', err)
    }
};

const addNewTodoMongo = async (reqBody) => {
    try {
        let todo = new TodoModel(reqBody);
        return await todo.save();
    } catch (err) {
        console.log('Error occurred while adding new todo in service.', err)
    }
};

const deleteTodoMongo = async (id) => {
    try {
        return await TodoModel.deleteOne({
            "_id" : id
        });
    } catch (err) {
        console.log('Error occurred while deleting todo in service', err)
    }
};

const updateTodoMongo = async (id, reqBody) => {
    const todo = new TodoModel(reqBody);
    await TodoModel.updateOne(
        {
            "_id": id
        },
        {
            "content": todo.content,
            "isCompleted": todo.isCompleted
        }
    );
};

module.exports = {
    getAllTodosMongo,
    addNewTodoMongo,
    deleteTodoMongo,
    updateTodoMongo
};

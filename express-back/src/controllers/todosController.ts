const utils = require('../utils/utils');
const TodoModel = require('../models/Todo');

const getAllTodos = async (req, res) => {
    try {
        const allTodos = await TodoModel.find();
        return utils.sendResponse(res, {
            data: allTodos
        }, 200);
    } catch (err) {
        return utils.sendResponse(res, {
            message: 'Error occurred while getting all todos.',
            err
        }, 400);
    }
};

const addNewTodo = async (req, res) => {
    try {
        let todo = new TodoModel(req.body);
        const result = await todo.save();
        utils.sendResponse(res,{
            message: 'todo added successfully',
            result
        }, 200);
    } catch (err) {
        utils.sendResponse(res,{
            message: "Some error occured while adding new todo",
            err
        }, 400);
    }
};

const deleteTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        await TodoModel.deleteOne({
            "_id" : id
        });
        utils.sendResponse(res,{
            message: "Successfully delete todo"
        }, 200)
    } catch (err) {
        utils.sendResponse(res,{
            message: "Some error occured while deleting todo item",
            err
        }, 400);
    }
};

const updateTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        console.log('UPD: ', id, req.body);
        const todo = new TodoModel(req.body);
        await TodoModel.updateOne(
            {
                "_id": id
            },
            {
                "content": todo.content,
                "isCompleted": todo.isCompleted
            }
        );
        utils.sendResponse(res,{
            message: "Successfully udpate todo"
        }, 200)
    } catch (err) {
        utils.sendResponse(res,{
            message: "Some error occured while updating todo item",
            err
        }, 400)
    }
};

module.exports = {
    getAllTodos,
    addNewTodo,
    deleteTodoById,
    updateTodoById
};

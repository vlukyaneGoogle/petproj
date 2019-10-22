import utils from '../utils/utils';
import db from '../services/chooseDbService';

db.connect();

const getAllTodos = async (req, res) => {
    try {
        const allTodos = await db.getAllTodos();
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
        const result = await db.addNewTodo(req.body);
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
        await db.deleteTodo(req.params.id);
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
        await db.updateTodo(req.params.id, req.body);
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

export default {
    getAllTodos,
    addNewTodo,
    deleteTodoById,
    updateTodoById
};

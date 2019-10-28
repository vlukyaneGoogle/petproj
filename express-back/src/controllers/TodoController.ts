const utils = require('../utils/utils');

module.exports = class TodoController {
    todoService: any; // TODO interface
    constructor(todoService) {
        this.todoService = todoService;
    }

    getAllTodos = async (req, res) => {
        try {
            const allTodos = await this.todoService.getAllTodos();
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

    addNewTodo = async (req, res) => {
        try {
            const result = await this.todoService.addNewTodo(req.body);
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

    deleteTodoById = async (req, res) => {
        try {
            await this.todoService.deleteTodoById(req.params.id);
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

    updateTodoById = async (req, res) => {
        try {
            await this.todoService.updateTodoById(req.params.id, req.body);
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
};

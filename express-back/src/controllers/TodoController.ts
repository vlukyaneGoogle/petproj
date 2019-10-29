import {Service} from '../services/Service';
import {Controller} from './Controller';
import {ITodo, QueryResult} from '../repo/types';
import {TodoService} from '../services/TodoService';

const utils = require('../utils/utils');

export class TodoController extends Controller {
    todoService: Service;

    constructor(todoService: TodoService) {
        super(todoService);
        this.todoService = todoService;
    }

    getAllTodos = async (req, res): Promise<ITodo[]> => {
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

    addNewTodo = async (req, res): Promise<ITodo> => {
        try {
            const result = await this.todoService.addNewTodo(req.body);
            return utils.sendResponse(res,{
                message: 'todo added successfully',
                result
            }, 200);
        } catch (err) {
            return utils.sendResponse(res,{
                message: "Some error occured while adding new todo",
                err
            }, 400);
        }

    };

    deleteTodoById = async (req: any, res: any): Promise<QueryResult> => {
        try {
            await this.todoService.deleteTodoById(req.params.id);
            return utils.sendResponse(res,{
                message: "Successfully delete todo"
            }, 200)
        } catch (err) {
            return utils.sendResponse(res,{
                message: "Some error occured while deleting todo item",
                err
            }, 400);
        }
    };

    updateTodoById = async (req: any, res: any): Promise<void> => {
        try {
            await this.todoService.updateTodoById(req.params.id, req.body);
            return utils.sendResponse(res,{
                message: "Successfully udpate todo"
            }, 200)
        } catch (err) {
            return utils.sendResponse(res,{
                message: "Some error occured while updating todo item",
                err
            }, 400)
        }
    };
};

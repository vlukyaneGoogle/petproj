"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Controller_1 = require("./Controller");
const utils = require('../utils/utils');
class TodoController extends Controller_1.Controller {
    constructor(todoService) {
        super(todoService);
        this.getAllTodos = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const allTodos = yield this.todoService.getAllTodos();
                return utils.sendResponse(res, {
                    data: allTodos
                }, 200);
            }
            catch (err) {
                return utils.sendResponse(res, {
                    message: 'Error occurred while getting all todos.',
                    err
                }, 400);
            }
        });
        this.addNewTodo = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.todoService.addNewTodo(req.body);
                return utils.sendResponse(res, {
                    message: 'todo added successfully',
                    result
                }, 200);
            }
            catch (err) {
                return utils.sendResponse(res, {
                    message: "Some error occured while adding new todo",
                    err
                }, 400);
            }
        });
        this.deleteTodoById = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.todoService.deleteTodoById(req.params.id);
                return utils.sendResponse(res, {
                    message: "Successfully delete todo"
                }, 200);
            }
            catch (err) {
                return utils.sendResponse(res, {
                    message: "Some error occured while deleting todo item",
                    err
                }, 400);
            }
        });
        this.updateTodoById = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.todoService.updateTodoById(req.params.id, req.body);
                return utils.sendResponse(res, {
                    message: "Successfully udpate todo"
                }, 200);
            }
            catch (err) {
                return utils.sendResponse(res, {
                    message: "Some error occured while updating todo item",
                    err
                }, 400);
            }
        });
        this.todoService = todoService;
    }
}
exports.TodoController = TodoController;
;

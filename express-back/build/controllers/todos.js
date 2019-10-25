"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const utils = require('../utils/utils');
const TodoService_1 = tslib_1.__importDefault(require("../services/TodoService"));
const getAllTodos = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTodos = yield TodoService_1.default.getAllTodos();
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
const addNewTodo = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield TodoService_1.default.addNewTodo(req.body);
        utils.sendResponse(res, {
            message: 'todo added successfully',
            result
        }, 200);
    }
    catch (err) {
        utils.sendResponse(res, {
            message: "Some error occured while adding new todo",
            err
        }, 400);
    }
});
const deleteTodoById = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        yield TodoService_1.default.deleteTodoById(req.params.id);
        utils.sendResponse(res, {
            message: "Successfully delete todo"
        }, 200);
    }
    catch (err) {
        utils.sendResponse(res, {
            message: "Some error occured while deleting todo item",
            err
        }, 400);
    }
});
const updateTodoById = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        yield TodoService_1.default.updateTodoById(req.params.id, req.body);
        utils.sendResponse(res, {
            message: "Successfully udpate todo"
        }, 200);
    }
    catch (err) {
        utils.sendResponse(res, {
            message: "Some error occured while updating todo item",
            err
        }, 400);
    }
});
exports.default = {
    getAllTodos,
    addNewTodo,
    deleteTodoById,
    updateTodoById
};

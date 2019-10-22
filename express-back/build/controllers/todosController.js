"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const utils_1 = tslib_1.__importDefault(require("../utils/utils"));
const chooseDbService_1 = tslib_1.__importDefault(require("../services/chooseDbService"));
chooseDbService_1.default.connect();
const getAllTodos = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTodos = yield chooseDbService_1.default.getAllTodos();
        return utils_1.default.sendResponse(res, {
            data: allTodos
        }, 200);
    }
    catch (err) {
        return utils_1.default.sendResponse(res, {
            message: 'Error occurred while getting all todos.',
            err
        }, 400);
    }
});
const addNewTodo = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield chooseDbService_1.default.addNewTodo(req.body);
        utils_1.default.sendResponse(res, {
            message: 'todo added successfully',
            result
        }, 200);
    }
    catch (err) {
        utils_1.default.sendResponse(res, {
            message: "Some error occured while adding new todo",
            err
        }, 400);
    }
});
const deleteTodoById = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        yield chooseDbService_1.default.deleteTodo(req.params.id);
        utils_1.default.sendResponse(res, {
            message: "Successfully delete todo"
        }, 200);
    }
    catch (err) {
        utils_1.default.sendResponse(res, {
            message: "Some error occured while deleting todo item",
            err
        }, 400);
    }
});
const updateTodoById = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        yield chooseDbService_1.default.updateTodo(req.params.id, req.body);
        utils_1.default.sendResponse(res, {
            message: "Successfully udpate todo"
        }, 200);
    }
    catch (err) {
        utils_1.default.sendResponse(res, {
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

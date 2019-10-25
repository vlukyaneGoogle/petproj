"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const DIcontainer = require('../index');
const getAllTodos = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return yield DIcontainer.database.getAllTodos();
});
const addNewTodo = (reqBody) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { content } = reqBody;
    const todo = {
        content,
        isCompleted: false,
        isEditing: false
    };
    return yield DIcontainer.database.addNewTodo(todo);
});
const deleteTodoById = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return yield DIcontainer.database.deleteTodoById(id);
});
const updateTodoById = (id, reqBody) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const todo = {
        content: reqBody.content,
        isCompleted: reqBody.isCompleted,
        isEditing: reqBody.isEditing
    };
    return yield DIcontainer.database.updateTodoById(id, todo);
});
exports.default = {
    getAllTodos,
    addNewTodo,
    deleteTodoById,
    updateTodoById,
};

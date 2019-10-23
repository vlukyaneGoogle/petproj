"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Todo = require('../models/sequelize/Todo');
const getAllTodos = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Todo.findAll();
    }
    catch (err) {
        return err;
    }
});
const addNewTodo = (todo) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Todo.create(todo);
    }
    catch (err) {
        return err;
    }
});
const updateTodoById = (id, todo) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Todo.update({
            content: todo.content,
            isCompleted: todo.isCompleted
        }, {
            where: { id },
        });
    }
    catch (err) {
        return err;
    }
});
const deleteTodoById = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Todo.destroy({
            where: { id }
        });
        return { message: 'Item deleted' };
    }
    catch (err) {
        return err;
    }
});
exports.default = {
    getAllTodos,
    addNewTodo,
    updateTodoById,
    deleteTodoById
};

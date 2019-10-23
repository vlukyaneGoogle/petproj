"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Todo_1 = tslib_1.__importDefault(require("../models/mongo/Todo"));
const getAllTodos = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Todo_1.default.find();
    }
    catch (err) {
        console.log('ERR IN REPO: ', err);
        return err;
    }
});
const addNewTodo = (todo) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        let newTodo = new Todo_1.default(todo);
        return yield newTodo.save();
    }
    catch (err) {
        console.log('Error occurred while adding new todo in repo.', err);
        return err;
    }
});
const deleteTodoById = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Todo_1.default.deleteOne({
            "_id": id
        });
    }
    catch (err) {
        console.log('Error occurred while deleting todo in repo', err);
        return err;
    }
});
const updateTodoById = (id, editedTodo) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedTodo = new Todo_1.default(editedTodo);
        yield Todo_1.default.updateOne({
            "_id": id
        }, {
            "content": updatedTodo.content,
            "isCompleted": updatedTodo.isCompleted
        });
    }
    catch (err) {
        console.log('Error occurred while updating todo in repo', err);
        return err;
    }
});
exports.default = {
    getAllTodos,
    addNewTodo,
    deleteTodoById,
    updateTodoById
};

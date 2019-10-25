"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const DB_1 = tslib_1.__importDefault(require("../repository/DB"));
const checkConnection = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    console.log('opop');
    yield DB_1.default.isConnected();
});
checkConnection();
const getAllTodos = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return yield DB_1.default.getAllTodos();
});
const addNewTodo = (reqBody) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { content } = reqBody;
    const todo = {
        content,
        isCompleted: false,
        isEditing: false
    };
    return yield DB_1.default.addNewTodo(todo);
});
const deleteTodoById = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return yield DB_1.default.deleteTodoById(id);
});
const updateTodoById = (id, reqBody) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const todo = {
        content: reqBody.content,
        isCompleted: reqBody.isCompleted,
        isEditing: reqBody.isEditing
    };
    return yield DB_1.default.updateTodoById(id, todo);
});
exports.default = {
    getAllTodos,
    addNewTodo,
    deleteTodoById,
    updateTodoById,
};

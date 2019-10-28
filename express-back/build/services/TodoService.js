"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
module.exports = class TodoService {
    constructor(database) {
        this.getAllTodos = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('IM IN IN ');
            return yield this.database.getAllTodos();
        });
        this.addNewTodo = (reqBody) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { content } = reqBody;
            const todo = {
                content,
                isCompleted: false,
                isEditing: false
            };
            return yield this.database.addNewTodo(todo);
        });
        this.deleteTodoById = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.database.deleteTodoById(id);
        });
        this.updateTodoById = (id, reqBody) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const todo = {
                content: reqBody.content,
                isCompleted: reqBody.isCompleted,
                isEditing: reqBody.isEditing
            };
            return yield this.database.updateTodoById(id, todo);
        });
        this.database = database;
    }
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const DIcontainer = require('../index');
module.exports = class TodoService {
    constructor() {
        this.database = DIcontainer.database;
    }
    getAllTodos() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.database.getAllTodos();
        });
    }
    ;
    addNewTodo(reqBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { content } = reqBody;
            const todo = {
                content,
                isCompleted: false,
                isEditing: false
            };
            return yield this.database.addNewTodo(todo);
        });
    }
    ;
    deleteTodoById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.database.deleteTodoById(id);
        });
    }
    ;
    updateTodoById(id, reqBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const todo = {
                content: reqBody.content,
                isCompleted: reqBody.isCompleted,
                isEditing: reqBody.isEditing
            };
            return yield this.database.updateTodoById(id, todo);
        });
    }
    ;
};

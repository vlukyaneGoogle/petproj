"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Repo_1 = require("../common/Repo");
module.exports = class SequelizeRepo extends Repo_1.Repo {
    constructor(todoModel) {
        super();
        this.getAllTodos = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.Todo.findAll();
            }
            catch (err) {
                return err;
            }
        });
        this.addNewTodo = (todo) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.Todo.create(todo);
            }
            catch (err) {
                return err;
            }
        });
        this.updateTodoById = (id, todo) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.Todo.update({
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
        this.deleteTodoById = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.Todo.destroy({
                    where: { id }
                });
                return { message: 'Item deleted' };
            }
            catch (err) {
                return err;
            }
        });
        this.Todo = todoModel;
    }
};

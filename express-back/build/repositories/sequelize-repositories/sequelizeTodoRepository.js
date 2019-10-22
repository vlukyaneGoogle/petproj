"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Todo = require('../../models/sequelize-models/Todo');
exports.default = {
    getAllTodos() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield Todo.findAll();
            }
            catch (error) {
                return error;
            }
        });
    },
    addNewTodo(reqBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const { content, isCompleted, isEditing } = reqBody;
                return yield Todo.create({
                    content,
                    isCompleted,
                    isEditing
                });
            }
            catch (error) {
                console.log('Here we go AGAIN(');
                return error;
            }
        });
    },
    updateTodo(id, reqBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield Todo.update({
                    content: reqBody.content,
                    isCompleted: reqBody.isCompleted
                }, {
                    where: { id },
                });
            }
            catch (error) {
                return { error };
            }
        });
    },
    deleteTodo(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield Todo.destroy({
                    where: { id }
                });
                return { message: "Item deleted" };
            }
            catch (error) {
                return { message: error };
            }
        });
    }
};

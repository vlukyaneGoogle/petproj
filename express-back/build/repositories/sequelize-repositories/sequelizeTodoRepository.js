'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Todo_1 = require("../../models/sequelize-models/Todo");
exports.default = {
    getAllTodos() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield Todo_1.Todo.findAll();
            }
            catch (error) {
                return error;
            }
        });
    },
    getById(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const id = Number.parseInt(req.params.id, 10);
            try {
                const item = yield Todo_1.Todo.findByPk(id);
                return res.status(200).send({ item });
            }
            catch (error) {
                return res.status(400).send(error);
            }
        });
    },
    addNewTodo(reqBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('I WAS HERE');
            try {
                const aga = yield Todo_1.Todo.create(reqBody);
                console.log('HE we go AGAIN', aga);
                return aga;
            }
            catch (error) {
                console.log('HE we go AGAIN(');
                return error;
            }
        });
    },
    updateTodo(id, reqBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const [numberOfAffectedRows, affectedRows] = yield Todo_1.Todo.update({
                    title: reqBody.title
                }, {
                    where: { id },
                    returning: true,
                    plain: true
                });
                return { item: affectedRows };
            }
            catch (error) {
                return { error };
            }
        });
    },
    toggleCompleted(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            try {
                const item = yield Todo_1.Todo.findByPk(id);
                const updated = yield item.update({
                    completed: !item.completed
                });
                return res.status(201).send(updated);
            }
            catch (error) { }
        });
    },
    deleteTodo(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield Todo_1.Todo.destroy({
                    where: { id }
                });
                return { message: "Item deleted" };
            }
            catch (error) {
                return { error };
            }
        });
    }
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelizeTodoRepository_1 = tslib_1.__importDefault(require("../repositories/sequelize-repositories/sequelizeTodoRepository"));
const DB_ENV = 'postgresql';
const getAllTodos = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let response;
    switch (DB_ENV) {
        case 'postgresql':
            response = yield sequelizeTodoRepository_1.default.getAllTodos();
            break;
        default:
            yield mongoDbConnection();
    }
    return response;
});
const addNewTodo = (reqBody) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let response;
    switch (DB_ENV) {
        case 'postgresql':
            response = yield sequelizeTodoRepository_1.default.addNewTodo(reqBody);
            break;
        default:
            yield mongoDbConnection();
    }
    return response;
});
const deleteTodo = (id) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    switch (DB_ENV) {
        case 'postgresql':
            yield sequelizeTodoRepository_1.default.deleteTodo(id);
            break;
        default:
            yield mongoDbConnection();
    }
});
const updateTodo = (id, reqBody) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    switch (DB_ENV) {
        case 'postgresql':
            yield sequelizeTodoRepository_1.default.updateTodo(id, reqBody);
            break;
        default:
            yield mongoDbConnection();
    }
});
const mongoDbConnection = () => {
    console.log('MONGO CONNECTED!');
};
exports.default = {
    mongoDbConnection,
    getAllTodos,
    addNewTodo,
    deleteTodo,
    updateTodo
};

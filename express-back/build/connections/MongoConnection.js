"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Connection_1 = require("./Connection");
const mongoTodoRepository_1 = tslib_1.__importDefault(require("../repositories/mongo-repositories/mongoTodoRepository"));
class MongoConnection extends Connection_1.Connection {
    constructor() {
        super();
        this.dataBaseObj = require('mongoose');
        this.dataBaseObj.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
        const connection = this.dataBaseObj.connection;
        connection.once('open', function () {
            console.log('MongoDB database connection established successfully');
        });
    }
    getDb() {
        return this.dataBaseObj;
    }
    connect() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
    isConnected() {
        return false;
    }
    close(force) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
    }
    getAllTodos() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield mongoTodoRepository_1.default.getAllTodos();
        });
    }
    addNewTodo(todo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield mongoTodoRepository_1.default.addNewTodo(todo);
        });
    }
    deleteTodo(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield mongoTodoRepository_1.default.deleteTodo(id);
        });
    }
    updateTodo(id, todo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield mongoTodoRepository_1.default.updateTodo(id, todo);
        });
    }
}
exports.MongoConnection = MongoConnection;

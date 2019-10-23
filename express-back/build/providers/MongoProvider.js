"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Provider_1 = require("./Provider");
const mongoDb_1 = tslib_1.__importDefault(require("../repository/mongoDb"));
class MongoProvider extends Provider_1.Provider {
    constructor() {
        super();
        this.connect();
    }
    getDb() {
        return this.dataBaseObj;
    }
    connect() {
        this.dataBaseObj = require('mongoose');
        this.dataBaseObj.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
    }
    isConnected() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const connection = this.dataBaseObj.connection;
            let hasConnection = false;
            yield connection.once('open', function () {
                console.log('Connection to mongoDB has been established successfully', hasConnection);
            });
        });
    }
    close(force) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
    }
    getAllTodos() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield mongoDb_1.default.getAllTodos();
        });
    }
    addNewTodo(todo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield mongoDb_1.default.addNewTodo(todo);
        });
    }
    deleteTodoById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield mongoDb_1.default.deleteTodoById(id);
        });
    }
    updateTodoById(id, todo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield mongoDb_1.default.updateTodoById(id, todo);
        });
    }
}
exports.MongoProvider = MongoProvider;

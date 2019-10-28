"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const DB_1 = require("../common/DB");
const MongoRepo = require('./MongoRepo');
module.exports = class MongoDB extends DB_1.DB {
    constructor(databaseInstance) {
        super(databaseInstance);
        this.dataBaseObj = databaseInstance;
        this.dataRepository = new MongoRepo();
    }
    getDb() {
        return this.dataBaseObj;
    }
    connect() {
    }
    isConnected() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const connection = this.dataBaseObj.connection;
            yield connection.once('open', function () {
                console.log('Connection to mongoDB has been established successfully');
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
            return yield this.dataRepository.getAllTodos();
        });
    }
    addNewTodo(todo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.dataRepository.addNewTodo(todo);
        });
    }
    deleteTodoById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.dataRepository.deleteTodoById(id);
        });
    }
    updateTodoById(id, todo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.dataRepository.updateTodoById(id, todo);
        });
    }
};

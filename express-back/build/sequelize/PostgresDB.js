"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const DB_1 = require("../common/DB");
const DIcontainer = require('../index');
const connectPsql = require('./postgresConnection');
const SequelizeRepo = require('./SequlizeRepo');
module.exports = class PostgresDB extends DB_1.DB {
    constructor(databaseInstance, todoModel) {
        super();
        this.createRepo(todoModel);
        this.dataBaseObj = databaseInstance;
    }
    getDb() {
        return this.dataBaseObj;
    }
    createRepo(todoModel) {
        this.dataRepository = new SequelizeRepo(todoModel);
    }
    connect() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield connectPsql();
        });
    }
    isConnected() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.dataBaseObj
                .authenticate()
                .then(() => {
                console.log('Connection to postgres has been established successfully.');
            })
                .catch(err => {
                console.error('Unable to connect to the database:', err);
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

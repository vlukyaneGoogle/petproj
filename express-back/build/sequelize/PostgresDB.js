"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const DB_1 = require("../common/DB");
const SequelizeRepo = require('./SequlizeRepo');
module.exports = class PostgresDB extends DB_1.DB {
    constructor(databaseInstance, todoModel) {
        super(databaseInstance);
        this.connect = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
        this.isConnected = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.dataBaseObj
                .authenticate()
                .then(() => {
                console.log('Connection to postgres has been established successfully.');
            })
                .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
        });
        this.close = (force) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
        this.getAllTodos = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.dataRepository.getAllTodos();
        });
        this.addNewTodo = (todo) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.dataRepository.addNewTodo(todo);
        });
        this.deleteTodoById = (id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.dataRepository.deleteTodoById(id);
        });
        this.updateTodoById = (id, todo) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.dataRepository.updateTodoById(id, todo);
        });
        this.dataRepository = new SequelizeRepo(todoModel);
        this.dataBaseObj = databaseInstance;
    }
    getDb() {
        return this.dataBaseObj;
    }
};

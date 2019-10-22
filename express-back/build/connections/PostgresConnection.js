"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Connection_1 = require("./Connection");
const sequelizeTodoRepository_1 = tslib_1.__importDefault(require("../repositories/sequelize-repositories/sequelizeTodoRepository"));
const sequelize_1 = require("sequelize");
class PostgresConnection extends Connection_1.Connection {
    constructor() {
        super();
        this.dataBaseObj = new sequelize_1.Sequelize('TodosDatabase', 'vlukyane', '', {
            host: 'localhost',
            dialect: 'postgres',
            define: {
                timestamps: false
            }
        });
        this.dataBaseObj
            .authenticate()
            .then(() => {
            console.log('Connection to psql has been established successfully.');
        })
            .catch(err => {
            console.error('Unable to connect to the database:', err);
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
            return yield sequelizeTodoRepository_1.default.getAllTodos();
        });
    }
    addNewTodo(todo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sequelizeTodoRepository_1.default.addNewTodo(todo);
        });
    }
    deleteTodo(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sequelizeTodoRepository_1.default.deleteTodo(id);
        });
    }
    updateTodo(id, todo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield sequelizeTodoRepository_1.default.updateTodo(id, todo);
        });
    }
}
exports.PostgresConnection = PostgresConnection;

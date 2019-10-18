"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const mongoTodoRepository = require('../repositories/mongo-repositories/mongoTodoRepository');
const DB_ENV = 'mongo';
const dbSwitcher = () => __awaiter(void 0, void 0, void 0, function* () {
    switch (DB_ENV) {
        case 'mongo':
            yield mongoDbConnection();
            break;
        default:
            yield mongoDbConnection();
    }
});
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    let response;
    switch (DB_ENV) {
        case 'mongo':
            console.log('WAS HERE: ');
            response = yield mongoTodoRepository.getAllTodosMongo();
            break;
        default:
            yield mongoDbConnection();
    }
    return response;
});
const addNew = (reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    let response;
    switch (DB_ENV) {
        case 'mongo':
            response = yield mongoTodoRepository.addNewTodoMongo(reqBody);
            break;
        default:
            yield mongoDbConnection();
    }
    return response;
});
const deleteTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    switch (DB_ENV) {
        case 'mongo':
            yield mongoTodoRepository.deleteTodoMongo(id);
            break;
        default:
            yield mongoDbConnection();
    }
});
const updateTodo = (id, reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    switch (DB_ENV) {
        case 'mongo':
            yield mongoTodoRepository.updateTodoMongo(id, reqBody);
            break;
        default:
            yield mongoDbConnection();
    }
});
const mongoDbConnection = () => {
    console.log('MONGO CONNECTED!');
};
module.exports = {
    dbSwitcher,
    mongoDbConnection,
    getAll,
    addNew,
    deleteTodo,
    updateTodo
};

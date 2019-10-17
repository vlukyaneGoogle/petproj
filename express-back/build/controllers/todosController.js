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
const utils = require('../utils/utils');
const TodoModel = require('../models/Todo');
const getAllTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTodos = yield TodoModel.find();
        return utils.sendResponse(res, {
            data: allTodos
        }, 200);
    }
    catch (err) {
        return utils.sendResponse(res, {
            message: 'Error occurred while getting all todos.',
            err
        }, 400);
    }
});
const addNewTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let todo = new TodoModel(req.body);
        const result = yield todo.save();
        utils.sendResponse(res, {
            message: 'todo added successfully',
            result
        }, 200);
    }
    catch (err) {
        utils.sendResponse(res, {
            message: "Some error occured while adding new todo",
            err
        }, 400);
    }
});
const deleteTodoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield TodoModel.deleteOne({
            "_id": id
        });
        utils.sendResponse(res, {
            message: "Successfully delete todo"
        }, 200);
    }
    catch (err) {
        utils.sendResponse(res, {
            message: "Some error occured while deleting todo item",
            err
        }, 400);
    }
});
const updateTodoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log('UPD: ', id, req.body);
        const todo = new TodoModel(req.body);
        yield TodoModel.updateOne({
            "_id": id
        }, {
            "content": todo.content,
            "isCompleted": todo.isCompleted
        });
        utils.sendResponse(res, {
            message: "Successfully udpate todo"
        }, 200);
    }
    catch (err) {
        utils.sendResponse(res, {
            message: "Some error occured while updating todo item",
            err
        }, 400);
    }
});
module.exports = {
    getAllTodos,
    addNewTodo,
    deleteTodoById,
    updateTodoById
};

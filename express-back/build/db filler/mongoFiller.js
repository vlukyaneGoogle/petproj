"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Todo_1 = tslib_1.__importDefault(require("../todos/repo/mongo/models/Todo"));
const mongoose = require('mongoose');
const faker = require('faker');
mongoose.connect('mongodb://127.0.0.1:27017/todos_huge', (err, db) => {
    let todos = [];
    for (let i = 0; i < 1000; i++) {
        const newTodo = {
            content: faker.random.words(),
            isEditing: false,
            isCompleted: false
        };
        todos.push(newTodo);
    }
    Todo_1.default.insertMany(todos)
        .then(res => {
        console.log(res);
    })
        .catch(err => {
        console.log('OOPS', err);
    });
});

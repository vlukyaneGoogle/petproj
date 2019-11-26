import Todo from '../todos/repo/mongo/models/Todo';

const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://127.0.0.1:27017/todos_huge', (err, db) => {
    let todos = [];
    // Todo.find()
    //     .then(res => {
    //     console.log('OPAAA', res);
    //
    // })
    for (let i = 0; i < 1000; i++) {
        const newTodo = {
            content: faker.random.words(),
            isEditing: false,
            isCompleted: false
        };
        // @ts-ignore
        todos.push(newTodo);
    }
    Todo.insertMany(todos)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log('OOPS', err)
        })
});

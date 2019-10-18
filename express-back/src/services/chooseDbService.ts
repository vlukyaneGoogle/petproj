const mongoTodoRepository = require('../repositories/mongo-repositories/mongoTodoRepository');
const DB_ENV = 'mongo';

const dbSwitcher = async () => {
    switch (DB_ENV) {
        case 'mongo':
            await mongoDbConnection();
            break;
        default:
            await mongoDbConnection();
    }
};

const getAll = async () => {
    let response;
    switch (DB_ENV) {
        case 'mongo':
            console.log('WAS HERE: ');
            response = await mongoTodoRepository.getAllTodosMongo();
            break;

        default:
            await mongoDbConnection();
    }

    return response;
};

const addNew = async (reqBody) => {
    let response;
    switch (DB_ENV) {
        case 'mongo':
            response = await mongoTodoRepository.addNewTodoMongo(reqBody);
            break;

        default:
            await mongoDbConnection();
    }

    return response;
};

const deleteTodo = async (id) => {
    switch (DB_ENV) {
        case 'mongo':
            await mongoTodoRepository.deleteTodoMongo(id);
            break;

        default:
            await mongoDbConnection();
    }
};

const updateTodo = async (id, reqBody) => {
    switch (DB_ENV) {
        case 'mongo':
            await mongoTodoRepository.updateTodoMongo(id, reqBody);
            break;

        default:
            await mongoDbConnection();
    }
};

const mongoDbConnection = () => {
    console.log('MONGO CONNECTED!');
    // const mongoose = require('mongoose');
    // mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
    // const connection = mongoose.connection;
    // connection.once('open', function() {
    //     console.log("MongoDB database connection established successfully");
    // })
};

module.exports = {
    dbSwitcher,
    mongoDbConnection,
    getAll,
    addNew,
    deleteTodo,
    updateTodo
};

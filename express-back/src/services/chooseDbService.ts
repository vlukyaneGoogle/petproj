import mongoTodoRepository from '../repositories/mongo-repositories/mongoTodoRepository';
import sequelizeTodoRepository from '../repositories/sequelize-repositories/sequelizeTodoRepository';
const DB_ENV = 'postgresql';

const getAllTodos = async () => {
    let response;
    switch (DB_ENV) {
        // case 'mongo':
        //     response = await mongoTodoRepository.getAllTodos();
        //     break;

        case 'postgresql':
            response = await sequelizeTodoRepository.getAllTodos();
            break;

        default:
            await mongoDbConnection();
    }

    return response;
};

const addNewTodo = async (reqBody) => {
    let response;
    switch (DB_ENV) {
        // case 'mongo':
        //     response = await mongoTodoRepository.addNewTodo(reqBody);
        //     break;

        case 'postgresql':
            response = await sequelizeTodoRepository.addNewTodo(reqBody);
            break;

        default:
            await mongoDbConnection();
    }

    return response;
};

const deleteTodo = async (id) => {
    switch (DB_ENV) {
        // case 'mongo':
        //     await mongoTodoRepository.deleteTodo(id);
        //     break;

        case 'postgresql':
            await sequelizeTodoRepository.deleteTodo(id);
            break;

        default:
            await mongoDbConnection();
    }
};

const updateTodo = async (id, reqBody) => {
    switch (DB_ENV) {
        // case 'mongo':
        //     await mongoTodoRepository.updateTodo(id, reqBody);
        //     break;

        case 'postgresql':
            await sequelizeTodoRepository.updateTodo(id, reqBody);
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

export default {
    mongoDbConnection,
    getAllTodos,
    addNewTodo,
    deleteTodo,
    updateTodo
};

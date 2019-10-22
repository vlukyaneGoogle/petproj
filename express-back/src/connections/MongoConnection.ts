import {Connection, QueryResult} from './Connection';
import {ITodo} from '../common/types';
import mongoTodoRepository from '../repositories/mongo-repositories/mongoTodoRepository';

export class MongoConnection extends Connection {

    async connect(): Promise<void> {
        const mongoose = require('mongoose');
        mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
        const connection = mongoose.connection;
        connection.once('open', function() {
            console.log("MongoDB database connection established successfully");
        });
        return;
    }

    isConnected(): boolean {
        return false;
    }

    async close(force?: boolean): Promise<void> {
        return undefined;
    }

    async getAllTodos(): Promise<ITodo[]> {
        return await mongoTodoRepository.getAllTodos();
    }

    async addNewTodo(todo: ITodo): Promise<ITodo> {
        return await mongoTodoRepository.addNewTodo(todo);
    }

    async deleteTodo(id: number): Promise<QueryResult> {
        return await mongoTodoRepository.deleteTodo(id);
    }

    async updateTodo(id: number, todo: ITodo): Promise<void> {
        return await mongoTodoRepository.updateTodo(id, todo);
    }
}

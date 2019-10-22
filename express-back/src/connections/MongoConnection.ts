import {Connection, QueryResult} from './Connection';
import {ITodo} from '../common/types';
import mongoTodoRepository from '../repositories/mongo-repositories/mongoTodoRepository';
import { Mongoose } from 'mongoose';

export class MongoConnection extends Connection {
    dataBaseObj: Mongoose;
    constructor() {
        super();
        this.dataBaseObj = require('mongoose');
        this.dataBaseObj.connect('mongodb://127.0.0.1:27017/todos', {useNewUrlParser: true});
        const connection = this.dataBaseObj.connection;
        connection.once('open', function() {
            console.log('MongoDB database connection established successfully');
        });
    }

    getDb(): Mongoose {
        return this.dataBaseObj;
    }

    async connect(): Promise<void> {
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

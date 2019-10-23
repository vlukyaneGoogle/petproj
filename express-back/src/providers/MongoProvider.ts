import {Provider, QueryResult} from './Provider';
import {ITodo} from '../common/types';
import mongoDb from '../repository/mongoDb';
import { Mongoose } from 'mongoose';

export class MongoProvider extends Provider {
    dataBaseObj: Mongoose;
    constructor() {
        super();
        this.connect();
    }

    getDb(): Mongoose {
        return this.dataBaseObj;
    }

    connect(): void {
        this.dataBaseObj = require('mongoose');
        this.dataBaseObj.connect('mongodb://127.0.0.1:27017/todos', {useNewUrlParser: true});
    }

    async isConnected(): Promise<void> {
        const connection = this.dataBaseObj.connection;
        await connection.once('open', function() {
            console.log('Connection to mongoDB has been established successfully');
        });
    }

    async close(force?: boolean): Promise<void> {
        return undefined;
    }

    async getAllTodos(): Promise<ITodo[]> {
        return await mongoDb.getAllTodos();
    }

    async addNewTodo(todo: ITodo): Promise<ITodo> {
        return await mongoDb.addNewTodo(todo);
    }

    async deleteTodoById(id: number): Promise<QueryResult> {
        return await mongoDb.deleteTodoById(id);
    }

    async updateTodoById(id: number, todo: ITodo): Promise<void> {
        return await mongoDb.updateTodoById(id, todo);
    }
}

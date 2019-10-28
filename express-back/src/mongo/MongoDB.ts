import { QueryResult } from '../common/types';
import { DB } from '../common/DB';
import { ITodo } from '../common/types';
import { Mongoose } from 'mongoose';
import {Repo} from '../common/Repo';

const MongoRepo = require('./MongoRepo');

module.exports = class MongoDB extends DB {
    dataBaseObj: Mongoose;
    dataRepository: Repo;
    constructor(databaseInstance) {
        super(databaseInstance);
        this.dataBaseObj = databaseInstance;
        this.dataRepository = new MongoRepo();
    }

    getDb(): Mongoose {
        return this.dataBaseObj;
    }

    connect(): void {
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
        return await this.dataRepository.getAllTodos();
    }

    async addNewTodo(todo: ITodo): Promise<ITodo> {
        return await this.dataRepository.addNewTodo(todo);
    }

    async deleteTodoById(id: number): Promise<QueryResult> {
        return await this.dataRepository.deleteTodoById(id);
    }

    async updateTodoById(id: number, todo: ITodo): Promise<void> {
        return await this.dataRepository.updateTodoById(id, todo);
    }
};

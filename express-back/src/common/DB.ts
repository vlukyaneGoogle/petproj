import {IRepo, ITodo, T} from './types';
import { Sequelize } from 'sequelize';
import { Mongoose } from 'mongoose'
import { QueryResult } from './types';
import {Repo} from './Repo';

export abstract class DB {
    dataBaseObj: Sequelize | Mongoose;
    dataRepository: any;
    constructor() {}

    abstract getDb(): Sequelize | Mongoose;

    abstract connect(): void

    abstract async isConnected(): Promise<void>;

    abstract async close(force?: boolean): Promise<void>;

    abstract async getAllTodos(): Promise<ITodo[]>;

    abstract async addNewTodo(todo: ITodo): Promise<ITodo>;

    abstract async updateTodoById(id: number, todo: ITodo): Promise<void>;

    abstract async deleteTodoById(id: number): Promise<QueryResult>;

}


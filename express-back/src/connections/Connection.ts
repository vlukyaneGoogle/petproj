import { ITodo } from '../common/types';
import { Sequelize } from 'sequelize';
import { Mongoose } from 'mongoose'

export abstract class Connection {
    dataBaseObj: Sequelize | Mongoose;
    constructor() {}

    abstract getDb(): Sequelize | Mongoose;

    abstract async connect(): Promise<void>;

    abstract isConnected(): boolean;

    abstract async close(force?: boolean): Promise<void>;

    abstract async getAllTodos(): Promise<ITodo[]>;

    abstract async addNewTodo(todo: ITodo): Promise<ITodo>;

    abstract async updateTodo(id: number, todo: ITodo): Promise<void>;

    abstract async deleteTodo(id: number): Promise<QueryResult>;

}

export interface QueryResult {
    message: string | Error
}


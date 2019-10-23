import { ITodo } from '../common/types';
import { Sequelize } from 'sequelize';
import { Mongoose } from 'mongoose'

export abstract class Provider {
    dataBaseObj: Sequelize | Mongoose;
    constructor() {}

    abstract getDb(): Sequelize | Mongoose;

    abstract connect(): void | Sequelize;

    abstract async isConnected(): Promise<void>;

    abstract async close(force?: boolean): Promise<void>;

    abstract async getAllTodos(): Promise<ITodo[]>;

    abstract async addNewTodo(todo: ITodo): Promise<ITodo>;

    abstract async updateTodoById(id: number, todo: ITodo): Promise<void>;

    abstract async deleteTodoById(id: number): Promise<QueryResult>;

}

export interface QueryResult {
    message: string | Error
}


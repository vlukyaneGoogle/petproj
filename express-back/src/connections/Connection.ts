import {ITodo} from '../common/types';

export abstract class Connection {
    constructor() {}

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


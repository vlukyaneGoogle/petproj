import {IRepo, ITodo} from './types';
import {QueryResult} from './types';

export abstract class Repo implements IRepo {
    constructor() {}

    abstract async getAllTodos(): Promise<ITodo[]>;

    abstract async addNewTodo(todo: ITodo): Promise<ITodo>;

    abstract async deleteTodoById(id: number): Promise<QueryResult>;

    abstract async updateTodoById(id: number, todo: ITodo): Promise<void>;

}

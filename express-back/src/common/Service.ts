import {IService, ITodo} from './types';
import {QueryResult} from './types';
import {DB} from './DB';

export abstract class Service implements IService {
    constructor(database: DB) {}

    abstract async getAllTodos(): Promise<ITodo[]>;

    abstract async addNewTodo(todo: ITodo): Promise<ITodo>;

    abstract async deleteTodoById(id: number): Promise<QueryResult>;

    abstract async updateTodoById(id: number, todo: ITodo): Promise<void>;

}

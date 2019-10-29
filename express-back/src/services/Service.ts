import {IService, ITodo} from '../repo/types';
import {QueryResult} from '../repo/types';

export abstract class Service implements IService {
    abstract async getAllTodos(): Promise<ITodo[]>;

    abstract async addNewTodo(todo: ITodo): Promise<ITodo>;

    abstract async deleteTodoById(id: number): Promise<QueryResult>;

    abstract async updateTodoById(id: number, todo: ITodo): Promise<void>;

}

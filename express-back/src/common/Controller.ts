import {IController, ITodo} from './types';
import {QueryResult} from './types';
import {Service} from './Service';

export abstract class Controller implements IController {
    constructor(service: Service) {}

    abstract async getAllTodos(req: any, res: any): Promise<ITodo[]>;

    abstract async addNewTodo(req: any, res: any): Promise<ITodo>;

    abstract async deleteTodoById(req: any, res: any): Promise<QueryResult>;

    abstract async updateTodoById(req: any, res: any): Promise<void>;

}

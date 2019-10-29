import {IController, ITodo} from '../repo/types';
import {QueryResult} from '../repo/types';
import {Service} from '../services/Service';

export abstract class Controller implements IController {
    constructor(service: Service) {}

    abstract async getAllTodos(req: any, res: any): Promise<ITodo[]>;

    abstract async addNewTodo(req: any, res: any): Promise<ITodo>;

    abstract async deleteTodoById(req: any, res: any): Promise<QueryResult>;

    abstract async updateTodoById(req: any, res: any): Promise<void>;

}

import {ITodo} from '../repo/types';
import {QueryResult} from '../repo/types';

export interface Service {
    getAllTodos(): Promise<ITodo[]>;

    addNewTodo(todo: ITodo): Promise<ITodo>;

    deleteTodoById(id: number): Promise<QueryResult>;

    updateTodoById(id: number, todo: ITodo): Promise<void>;

}

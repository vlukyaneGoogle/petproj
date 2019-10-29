import {ITodo} from './types';
import {QueryResult} from './types';

export interface Repo {

    getAllTodos() :Promise<ITodo[]>;

    addNewTodo(todo :ITodo) :Promise<ITodo>;

    deleteTodoById(id :number) :Promise<QueryResult>;

    updateTodoById(id :number, todo :ITodo) :Promise<void>;

}

export interface DB {
    db :any;
    Todo ?:any;
}


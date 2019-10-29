import {DB} from './Repo';
import {Express, Router} from 'express';
import {Sequelize} from 'sequelize';
import {Service} from '../services/Service';

export interface IResponse {
    success: boolean,
    error: boolean
}

export interface ITodo {
    content: string,
    isCompleted: boolean,
    isEditing: boolean
}

export interface IContainer {
    todoService: Service;
    database: DB,
    databaseInstance: Sequelize,
    App: Express;
    todoRouter: Router
}

export interface QueryResult {
    message: string | Error
}

export interface IService {
    getAllTodos(): Promise<ITodo[]>;
    addNewTodo(todo: ITodo): Promise<ITodo>;
    deleteTodoById(id: number): Promise<QueryResult>;
    updateTodoById(id: number, todo: ITodo): Promise<void>;
}

export interface IController {
    getAllTodos(req: any, res: any): Promise<ITodo[]>;
    addNewTodo(req: any, res: any): Promise<ITodo>;
    deleteTodoById(req: any, res: any): Promise<QueryResult>;
    updateTodoById(req: any, res: any): Promise<void>;
}


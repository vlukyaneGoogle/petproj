import {DB} from './DB';
import {Express, Router} from 'express';
import {Sequelize} from 'sequelize';
import {Service} from './Service';

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

export interface IRepo {
    getAllTodos(): Promise<ITodo[]>;
    addNewTodo(todo: ITodo): Promise<ITodo>;
    deleteTodoById(id: number): Promise<QueryResult>;
    updateTodoById(id: number, todo: ITodo): Promise<void>;
}

export interface IService {
    getAllTodos(): Promise<ITodo[]>;
    addNewTodo(todo: ITodo): Promise<ITodo>;
    deleteTodoById(id: number): Promise<QueryResult>;
    updateTodoById(id: number, todo: ITodo): Promise<void>;
}


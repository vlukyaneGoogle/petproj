import {Provider} from '../providers/Provider';
import {Express} from 'express';

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
    services: any;
    database: Provider,
    App: Express;
}

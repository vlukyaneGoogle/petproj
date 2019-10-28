import { QueryResult } from '../common/types';
import { DB } from '../common/DB';
import { ITodo } from '../common/types';
import { Sequelize } from 'sequelize';

const SequelizeRepo = require('./SequlizeRepo');

module.exports = class PostgresDB extends DB {
    dataBaseObj: any;
    dataRepository: any;
    constructor(databaseInstance, todoModel) {
        super();
        this.createRepo(todoModel);

        this.dataBaseObj = databaseInstance;
    }

    getDb (): Sequelize {
        return this.dataBaseObj
    }

    createRepo(todoModel) {
        this.dataRepository =  new SequelizeRepo(todoModel);
    }

    connect = async (): Promise<any> => {
    };

    isConnected = async (): Promise<void> => {
        await this.dataBaseObj
            .authenticate()
            .then(() => {
                console.log('Connection to postgres has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    };

    close = async (force?: boolean): Promise<void> =>{
        return undefined;
    };

    getAllTodos = async (): Promise<ITodo[]> => {
            return await this.dataRepository.getAllTodos();
    };

    addNewTodo = async (todo: ITodo): Promise<ITodo> => {
        return await this.dataRepository.addNewTodo(todo);
    };

    deleteTodoById = async (id: number): Promise<QueryResult> =>{
        return await this.dataRepository.deleteTodoById(id);
    };

    updateTodoById = async (id: number, todo: ITodo): Promise<void> =>{
        return await this.dataRepository.updateTodoById(id, todo);
    }
};

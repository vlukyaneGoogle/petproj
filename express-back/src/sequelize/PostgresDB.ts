import { QueryResult } from '../common/types';
import { DB } from '../common/DB';
import { ITodo } from '../common/types';
import { Sequelize } from 'sequelize';

const DIcontainer = require('../index');
const connectPsql = require('./postgresConnection');
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

    async connect(): Promise<any> {
        return await connectPsql();
    }

    async isConnected(): Promise<void> {
        await this.dataBaseObj
            .authenticate()
            .then(() => {
                console.log('Connection to postgres has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    }

    async close(force?: boolean): Promise<void> {
        return undefined;
    }

    async getAllTodos(): Promise<ITodo[]>  {
            return await this.dataRepository.getAllTodos();
    }

    async addNewTodo(todo: ITodo): Promise<ITodo> {
        return await this.dataRepository.addNewTodo(todo);
    }

    async deleteTodoById(id: number): Promise<QueryResult> {
        return await this.dataRepository.deleteTodoById(id);
    }

    async updateTodoById(id: number, todo: ITodo): Promise<void> {
        return await this.dataRepository.updateTodoById(id, todo);
    }

}

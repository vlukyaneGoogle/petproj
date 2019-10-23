import { Provider, QueryResult } from './Provider';
import { ITodo } from '../common/types';
import sequelizeDb from '../repository/sequelizeDb';
import { Sequelize } from 'sequelize';
import postgresDb from '../connections/postgres';

export class PostgresProvider extends Provider {
    dataBaseObj: Sequelize;
    constructor() {
        super();
        this.dataBaseObj = this.connect();
    }

    getDb (): Sequelize {
        return this.dataBaseObj
    }

    connect(): Sequelize{
        return postgresDb;
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
            return await sequelizeDb.getAllTodos();
    }

    async addNewTodo(todo: ITodo): Promise<ITodo> {
        return await sequelizeDb.addNewTodo(todo);
    }

    async deleteTodoById(id: number): Promise<QueryResult> {
        return await sequelizeDb.deleteTodoById(id);
    }

    async updateTodoById(id: number, todo: ITodo): Promise<void> {
        return await sequelizeDb.updateTodoById(id, todo);
    }

}

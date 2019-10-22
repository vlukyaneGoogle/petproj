import {Connection, QueryResult} from './Connection';
import {ITodo} from '../common/types';
import sequelizeTodoRepository from '../repositories/sequelize-repositories/sequelizeTodoRepository';
import {Sequelize} from 'sequelize';

export class PostgresConnection extends Connection {
    dataBaseObj: Sequelize;
    constructor() {
        super();
        this.dataBaseObj = new Sequelize('TodosDatabase', 'vlukyane', '', {
            host: 'localhost',
            dialect:  'postgres',
            define: {
                timestamps: false
            }
        });

        this.dataBaseObj
            .authenticate()
            .then(() => {
                console.log('Connection to psql has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    }

    getDb ():Sequelize {
        return this.dataBaseObj
    }

    async connect(): Promise<void> {
        return ;
    }

    isConnected(): boolean {
        return false;
    }

    async close(force?: boolean): Promise<void> {
        return undefined;
    }

    async getAllTodos(): Promise<ITodo[]> {
        return await sequelizeTodoRepository.getAllTodos();
    }

    async addNewTodo(todo: ITodo): Promise<ITodo> {
        return await sequelizeTodoRepository.addNewTodo(todo);
    }

    async deleteTodo(id: number): Promise<QueryResult> {
        return await sequelizeTodoRepository.deleteTodo(id);
    }

    async updateTodo(id: number, todo: ITodo): Promise<void> {
        return await sequelizeTodoRepository.updateTodo(id, todo);
    }

}

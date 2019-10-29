import { DB } from '../Repo';
import {DataTypes, Sequelize} from 'sequelize';

export class PostgresDB implements DB {
    Todo: any;

    init () {
        const psql = new Sequelize('TodosDatabase', 'vlukyane', '', {
            host: 'localhost',
            dialect: 'postgres',
            define: {
                timestamps: false
            }
        });

        psql.authenticate()
            .then(() => {
                console.log('Connection to postgres has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });

        this.Todo = psql.define('Todo',{
            content: {
                type: DataTypes.STRING
            },
            isCompleted: {
                type: DataTypes.BOOLEAN
            },
            isEditing: {
                type: DataTypes.BOOLEAN
            },
        });
        return this;
    }
}

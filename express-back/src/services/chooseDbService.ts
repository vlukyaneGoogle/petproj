import {MongoConnection} from '../connections/MongoConnection';
import {PostgresConnection} from '../connections/PostgresConnection';
import {Connection} from '../connections/Connection';

const dotenv = require('dotenv');
dotenv.config();
const DB_ENV = process.env.DATABASE;

const chooseDb = (): Connection => {
    switch (DB_ENV) {
        case 'mongo':
            return new MongoConnection();
        case 'postgres':
            return new PostgresConnection();
        default:
            return new MongoConnection();
    }
};

const db: Connection = chooseDb();

export default db;

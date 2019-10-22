import {MongoConnection} from '../connections/MongoConnection';
import {PostgresConnection} from '../connections/PostgresConnection';

const dotenv = require('dotenv');
dotenv.config();
const DB_ENV = process.env.DATABASE;

const chooseDb = () => {
    if (DB_ENV === 'mongo') {
        return new MongoConnection();
    }

    if (DB_ENV === 'postgres') {
        return new PostgresConnection()
    }
};

const db: any = chooseDb();

export default db;

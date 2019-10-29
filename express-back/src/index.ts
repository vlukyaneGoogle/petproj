import {App} from './App';
import {MongoDB} from './repo/mongo/MongoDB';
import {DB} from './repo/Repo';
import {PostgresDB} from './repo/sql/PostgresDB';
import dotenv from "dotenv";
dotenv.config();


export const DBTypes = {
    MONGO: 'mongo',
    POSTGRE: 'postgres',
};

function getDb(type): DB {
    switch (type) {
        case DBTypes.MONGO: return MongoDB.init();
        case DBTypes.POSTGRE: return PostgresDB.init();
        default:  return MongoDB.init();
    }
}

const dbType = process.env.DATABASE ? process.env.DATABASE : DBTypes.MONGO;
const db: DB = getDb(dbType);
App.init(db, dbType);




import {App} from './App';
import {MongoDB} from './todos/repo/mongo/MongoDB';
import {DB} from './todos/repo/Repo';
import {PostgresDB} from './todos/repo/sql/PostgresDB';
import dotenv from "dotenv";
dotenv.config();


export enum DBTypes {
    MONGO = 'mongo',
    POSTGRE = 'postgres',
}

function getDb(type: DBTypes): DB {
    switch (type) {
        case DBTypes.MONGO: return MongoDB.init();
        case DBTypes.POSTGRE: return PostgresDB.init();
        default:  return MongoDB.init();
    }
}

const dbType: DBTypes = process.env.DATABASE ? process.env.DATABASE as DBTypes: DBTypes.MONGO;
const db: DB = getDb(dbType);

App.init(db);




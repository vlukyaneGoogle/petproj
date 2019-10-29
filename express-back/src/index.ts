import {App} from './App';
import {MongoDB} from './repo/mongo/MongoDB';
import {DB, Repo} from './repo/Repo';
import {MongoRepo} from './repo/mongo/MongoRepo';
import dotenv from "dotenv";
import {PostgresDB} from './repo/sql/PostgresDB';
import {SequelizeRepo} from './repo/sql/SequlizeRepo';
dotenv.config();


const DBTypes = {
    MONGO: 'mongo',
    POSTGRE: 'postgres',
};


function getDb(type): DB {
    switch (type) {
        case DBTypes.MONGO: return (new MongoDB()).init();
        case DBTypes.POSTGRE: return (new PostgresDB()).init();
        default:  return (new MongoDB()).init();
    }
}


function getRepo(type): Repo {
    switch (type) {
        case DBTypes.MONGO: return new MongoRepo(getDb(type));
        case DBTypes.POSTGRE: return new SequelizeRepo(getDb(type));
        default:  return new MongoRepo(getDb(type));
    }
}

const repo = getRepo(process.env.DATABASE);
const app = App.init(repo);

module.exports = {
    app
};




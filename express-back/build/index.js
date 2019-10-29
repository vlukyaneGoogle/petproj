"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const App_1 = require("./App");
const MongoDB_1 = require("./repo/mongo/MongoDB");
const MongoRepo_1 = require("./repo/mongo/MongoRepo");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const PostgresDB_1 = require("./repo/sql/PostgresDB");
const SequlizeRepo_1 = require("./repo/sql/SequlizeRepo");
dotenv_1.default.config();
const DBTypes = {
    MONGO: 'mongo',
    POSTGRE: 'postgres',
};
function getDb(type) {
    switch (type) {
        case DBTypes.MONGO: return (new MongoDB_1.MongoDB()).init();
        case DBTypes.POSTGRE: return (new PostgresDB_1.PostgresDB()).init();
        default: return (new MongoDB_1.MongoDB()).init();
    }
}
function getRepo(type) {
    switch (type) {
        case DBTypes.MONGO: return new MongoRepo_1.MongoRepo(getDb(type));
        case DBTypes.POSTGRE: return new SequlizeRepo_1.SequelizeRepo(getDb(type));
        default: return new MongoRepo_1.MongoRepo(getDb(type));
    }
}
const repo = getRepo(process.env.DATABASE);
const app = App_1.App.init(repo);
module.exports = {
    app
};

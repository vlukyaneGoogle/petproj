"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const App_1 = require("./App");
const MongoDB_1 = require("./repo/mongo/MongoDB");
const PostgresDB_1 = require("./repo/sql/PostgresDB");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
var DBTypes;
(function (DBTypes) {
    DBTypes["MONGO"] = "mongo";
    DBTypes["POSTGRE"] = "postgres";
})(DBTypes = exports.DBTypes || (exports.DBTypes = {}));
function getDb(type) {
    switch (type) {
        case DBTypes.MONGO: return MongoDB_1.MongoDB.init();
        case DBTypes.POSTGRE: return PostgresDB_1.PostgresDB.init();
        default: return MongoDB_1.MongoDB.init();
    }
}
const dbType = process.env.DATABASE ? process.env.DATABASE : DBTypes.MONGO;
const db = getDb(dbType);
App_1.App.init(db);

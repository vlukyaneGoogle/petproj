"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoConnection_1 = require("../connections/MongoConnection");
const PostgresConnection_1 = require("../connections/PostgresConnection");
const dotenv = require('dotenv');
dotenv.config();
const DB_ENV = process.env.DATABASE;
const chooseDb = () => {
    if (DB_ENV === 'mongo') {
        return new MongoConnection_1.MongoConnection();
    }
    if (DB_ENV === 'postgres') {
        return new PostgresConnection_1.PostgresConnection();
    }
};
const db = chooseDb();
exports.default = db;

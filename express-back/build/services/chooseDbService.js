"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoConnection_1 = require("../connections/MongoConnection");
const PostgresConnection_1 = require("../connections/PostgresConnection");
const dotenv = require('dotenv');
dotenv.config();
const DB_ENV = process.env.DATABASE;
const chooseDb = () => {
    switch (DB_ENV) {
        case 'mongo':
            return new MongoConnection_1.MongoConnection();
        case 'postgres':
            return new PostgresConnection_1.PostgresConnection();
        default:
            return new MongoConnection_1.MongoConnection();
    }
};
const db = chooseDb();
exports.default = db;

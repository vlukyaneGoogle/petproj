"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoProvider_1 = require("../providers/MongoProvider");
const PostgresProvider_1 = require("../providers/PostgresProvider");
const dotenv = require('dotenv');
dotenv.config();
const DB_ENV = process.env.DATABASE;
const chooseProvider = () => {
    switch (DB_ENV) {
        case 'mongo':
            return new MongoProvider_1.MongoProvider();
        case 'postgres':
            return new PostgresProvider_1.PostgresProvider();
        default:
            return new MongoProvider_1.MongoProvider();
    }
};
const dbProvider = chooseProvider();
exports.default = dbProvider;

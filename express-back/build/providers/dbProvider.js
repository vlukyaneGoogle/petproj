"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoProvider_1 = require("./MongoProvider");
const PostgresProvider_1 = require("./PostgresProvider");
const dotenv = require('dotenv');
dotenv.config();
const DB_ENV = process.env.DATABASE;
module.exports = function (c) {
    if (DB_ENV === 'mongo') {
        c.service('database', c => new MongoProvider_1.MongoProvider());
    }
    else {
        c.service('database', c => new PostgresProvider_1.PostgresProvider());
    }
};

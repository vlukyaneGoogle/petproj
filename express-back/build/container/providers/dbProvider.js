"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const DB_ENVv = process.env.DATABASE;
const MongoDB = require('../../mongo/MongoDB');
const PostgresDB = require('../../sequelize/PostgresDB');
module.exports = function (c) {
    return __awaiter(this, void 0, void 0, function* () {
        if (DB_ENVv === 'mongo') {
            const database = yield new MongoDB(c.databaseInstance);
            c.declare('database', c => database);
        }
        else if (DB_ENVv === 'postgres') {
            const database = yield new PostgresDB(c.databaseInstance, c.todoModel);
            yield c.declare('database', c => database);
        }
    });
};

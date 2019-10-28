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
module.exports = function (c, DB_ENV) {
    return __awaiter(this, void 0, void 0, function* () {
        if (DB_ENV === 'mongo') {
            const databaseProvider = yield require('../../mongo/mongoConnection')();
            c.declare('databaseInstance', c => databaseProvider);
        }
        else if (DB_ENV === 'postgres') {
            const databaseProvider = yield require('../../sequelize/postgresConnection')();
            c.declare('databaseInstance', c => databaseProvider);
        }
    });
};

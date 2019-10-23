"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const postgresDb = new sequelize_1.Sequelize('TodosDatabase', 'vlukyane', '', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false
    }
});
exports.default = postgresDb;

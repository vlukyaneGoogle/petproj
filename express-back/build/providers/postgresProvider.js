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
postgresDb
    .authenticate()
    .then(() => {
    console.log('Connection to psql has been established successfully.');
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
exports.default = postgresDb;

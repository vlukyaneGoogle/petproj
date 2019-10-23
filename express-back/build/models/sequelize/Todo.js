"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_1 = require("sequelize");
const postgres_1 = tslib_1.__importDefault(require("../../connections/postgres"));
const Todo = postgres_1.default.define('Todo', {
    content: {
        type: sequelize_1.DataTypes.STRING
    },
    isCompleted: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    isEditing: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
});
module.exports = Todo;

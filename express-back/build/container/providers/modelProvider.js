"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_1 = require("sequelize");
module.exports = function (c) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const TodoModel = c.databaseInstance.define('Todo', {
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
        c.declare('todoModel', c => TodoModel);
    });
};

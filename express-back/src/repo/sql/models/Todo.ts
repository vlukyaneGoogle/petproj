import { DataTypes } from 'sequelize';
const DIcontainer = require('../../../index');

console.log('taktka');
const Todo = DIcontainer.databaseInstance.define('Todo', {
    content: {
        type: DataTypes.STRING
    },
    isCompleted: {
        type: DataTypes.BOOLEAN
    },
    isEditing: {
        type: DataTypes.BOOLEAN
    },
});

module.exports = Todo;

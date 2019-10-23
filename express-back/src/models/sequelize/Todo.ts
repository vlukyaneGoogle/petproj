import { DataTypes } from 'sequelize';
import postgresDb from '../../connections/postgres';

const Todo = postgresDb.define('Todo', {
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

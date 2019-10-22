import { DataTypes } from 'sequelize';
import postgresDb from '../../providers/postgresProvider';

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

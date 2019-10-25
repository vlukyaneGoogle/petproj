import {DataTypes} from 'sequelize';

module.exports = async function(c){
    const TodoModel = c.databaseInstance.define('Todo', {
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
    c.declare('todoModel',  c => TodoModel)
};

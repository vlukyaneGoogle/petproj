export default (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todo', {
        content: DataTypes.STRING,
        isCompleted: DataTypes.BOOLEAN,
        isEdited: DataTypes.BOOLEAN,
    }, {});
    return Todo;
};

const Todo = require('../../models/sequelize-models/Todo');

export default {
    async getAllTodos() {
        try {
            return await Todo.findAll();
        } catch (error) {
            return error
        }
    },

    async addNewTodo(reqBody) {
        try {
            const { content, isCompleted, isEditing } = reqBody;
                return await Todo.create({
                    content,
                    isCompleted,
                    isEditing
                });
        } catch (error) {
            console.log('Here we go AGAIN(');
            return error;
        }
    },

    async updateTodo(id, reqBody) {
        try {
            return await Todo.update(
                {
                    content: reqBody.content,
                    isCompleted: reqBody.isCompleted
                },
                {
                    where: { id },
                }
            );
        } catch (error) {
            return { error }
        }
    },

    async deleteTodo( id: number ) {
        try {
            await Todo.destroy({
                where: { id }
            });
            return { message: "Item deleted" };
        } catch (error) {
            return { message: error };
        }
    }
};

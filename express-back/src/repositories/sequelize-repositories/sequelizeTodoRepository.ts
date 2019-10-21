'use strict';
import Todo from "../../models/sequelize-models/Todo";

export default {
    async getAllTodos() {
        try {
            return await Todo.findAll();
        } catch (error) {
            return error
        }
    },

    async getById(req, res) {
        const id = Number.parseInt(req.params.id, 10);
        try {
            const item = await Todo.findByPk(id);
            return res.status(200).send({ item });
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async addNewTodo(reqBody) {
        console.log('I WAS HERE');
        try {
            const aga = await Todo.create(reqBody);
            console.log('HE we go AGAIN', aga);
            return aga;
        } catch (error) {
            console.log('HE we go AGAIN(');
            return error;
        }
    },

    async updateTodo(id, reqBody) {
        try {
            const [numberOfAffectedRows, affectedRows] = await Todo.update(
                {
                    title: reqBody.title
                },
                {
                    where: { id },
                    returning: true, // needed for affectedRows to be populated
                    plain: true // makes sure that the returned instances are just plain objects
                }
            );
            return { item: affectedRows };
        } catch (error) {
            return { error }
        }
    },

    async toggleCompleted(req, res) {
        const id = Number(req.params.id);
        try {
            const item = await Todo.findByPk(id);
            const updated = await item.update({
                completed: !item.completed
            });

            return res.status(201).send(updated);
        } catch (error) {}
    },

    async deleteTodo( id: number ) {

        try {
            await Todo.destroy({
                where: { id }
            });
            return { message: "Item deleted" };
        } catch (error) {
            return { error };
        }
    }
};

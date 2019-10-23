import { ITodo } from '../common/types';
import { QueryResult } from '../providers/Provider';

const Todo = require('../models/sequelize/Todo');

 const getAllTodos = async (): Promise<ITodo[]> => {
    try {
        return await Todo.findAll();
    } catch (err) {
        return err;
    }
};

const addNewTodo = async (todo: ITodo): Promise<ITodo> => {
    try {
        return await Todo.create(todo);
    } catch (err) {
        return err;
    }
};

const updateTodoById = async (id: number, todo: ITodo): Promise<void> => {
    try {
        return await Todo.update(
            {
                content: todo.content,
                isCompleted: todo.isCompleted
            },
            {
                where: { id },
            }
        );
    } catch (err) {
        return err;
    }
};

const deleteTodoById = async (id: number): Promise<QueryResult> => {
    try {
        await Todo.destroy({
            where: { id }
        });
        return { message: 'Item deleted' };
    } catch (err) {
        return err;
    }
};


export default {
    getAllTodos,
    addNewTodo,
    updateTodoById,
    deleteTodoById
};

import { ITodo } from '../common/types';
import { QueryResult } from '../providers/Provider';
import DIcontainer from '../index';

const getAllTodos = async (): Promise<ITodo[]> => {
    return await DIcontainer.database.getAllTodos();
};

const addNewTodo = async (reqBody): Promise<ITodo> => {
    const { content } = reqBody;
    const todo: ITodo = {
        content,
        isCompleted: false,
        isEditing: false
    };
    return await DIcontainer.database.addNewTodo(todo);
};

const deleteTodoById = async (id: number): Promise<QueryResult> => {
    return await DIcontainer.database.deleteTodoById(id);
};

const updateTodoById = async (id: number, reqBody) => {
    const todo: ITodo = {
        content: reqBody.content,
        isCompleted: reqBody.isCompleted,
        isEditing: reqBody.isEditing
    };
    return await DIcontainer.database.updateTodoById(id, todo)
};

export default {
    getAllTodos,
    addNewTodo,
    deleteTodoById,
    updateTodoById,
}

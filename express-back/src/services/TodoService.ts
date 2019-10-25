import { ITodo } from '../common/types';
import { QueryResult } from '../providers/Provider';
import dbProvider from '../repository/DB';

import appContext from '../index'

const checkConnection = async () => {
    console.log('opop');
    await dbProvider.isConnected();
};
checkConnection();

const getAllTodos = async (): Promise<ITodo[]> => {
    return await dbProvider.getAllTodos();
};

const addNewTodo = async (reqBody): Promise<ITodo> => {
    const { content } = reqBody;
    const todo: ITodo = {
        content,
        isCompleted: false,
        isEditing: false
    };
    return await dbProvider.addNewTodo(todo);
};

const deleteTodoById = async (id: number): Promise<QueryResult> => {
    return await dbProvider.deleteTodoById(id);
};

const updateTodoById = async (id: number, reqBody) => {
    const todo: ITodo = {
        content: reqBody.content,
        isCompleted: reqBody.isCompleted,
        isEditing: reqBody.isEditing
    };
    return await dbProvider.updateTodoById(id, todo)
};

export default {
    getAllTodos,
    addNewTodo,
    deleteTodoById,
    updateTodoById,
}

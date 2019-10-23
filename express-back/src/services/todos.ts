import { ITodo } from '../common/types';
import { QueryResult } from '../providers/Provider';
import dbRepo from '../repository/DB';

const checkConnection = async () => {
    await dbRepo.isConnected();
};
checkConnection();

const getAllTodos = async (): Promise<ITodo[]> => {
    return await dbRepo.getAllTodos();
};

const addNewTodo = async (reqBody): Promise<ITodo> => {
    const { content } = reqBody;
    const todo: ITodo = {
        content,
        isCompleted: false,
        isEditing: false
    };
    return await dbRepo.addNewTodo(todo);
};

const deleteTodoById = async (id: number): Promise<QueryResult> => {
    return await dbRepo.deleteTodoById(id);
};

const updateTodoById = async (id: number, reqBody) => {
    const todo: ITodo = {
        content: reqBody.content,
        isCompleted: reqBody.isCompleted,
        isEditing: reqBody.isEditing
    };
    return await dbRepo.updateTodoById(id, todo)
};

export default {
    getAllTodos,
    addNewTodo,
    deleteTodoById,
    updateTodoById,
}

import Todo from '../models/mongo/Todo';
import { ITodo } from '../common/types';
import { QueryResult } from '../providers/Provider';

const getAllTodos = async (): Promise<ITodo[]> => {
    try {
        return await Todo.find();
    } catch (err) {
        console.log('ERR IN REPO: ', err);
        return err;
    }
};

const addNewTodo = async (todo: ITodo): Promise<ITodo> => {
    try {
        let newTodo = new Todo(todo);
        return await newTodo.save();
    } catch (err) {
        console.log('Error occurred while adding new todo in repo.', err);
        return err;
    }
};

const deleteTodoById = async (id: number): Promise<QueryResult> => {
    try {
        return await Todo.deleteOne({
            "_id" : id
        });
    } catch (err) {
        console.log('Error occurred while deleting todo in repo', err);
        return err;
    }
};

const updateTodoById = async (id: number, editedTodo: ITodo): Promise<void> => {
    try {
        const updatedTodo = new Todo(editedTodo);
        await Todo.updateOne(
            {
                "_id": id
            },
            {
                "content": updatedTodo.content,
                "isCompleted": updatedTodo.isCompleted
            }
        );
    } catch (err) {
        console.log('Error occurred while updating todo in repo', err);
        return err;
    }

};

export default {
    getAllTodos,
    addNewTodo,
    deleteTodoById,
    updateTodoById
};

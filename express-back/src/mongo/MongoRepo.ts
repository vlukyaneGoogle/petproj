import {ITodo} from '../common/types';
import Todo from './models/Todo';
import {QueryResult} from '../common/types';
import {Repo} from '../common/Repo';

module.exports = class MongoRepo extends Repo {
    constructor() {
        super();
    }

    getAllTodos = async (): Promise<ITodo[]> => {
        try {
            return await Todo.find();
        } catch (err) {
            console.log('ERR IN REPO: ', err);
            return err;
        }
    };

    addNewTodo = async (todo: ITodo): Promise<ITodo> => {
        try {
            let newTodo = new Todo(todo);
            return await newTodo.save();
        } catch (err) {
            console.log('Error occurred while adding new todo in repo.', err);
            return err;
        }
    };

    deleteTodoById = async (id: number): Promise<QueryResult> => {
        try {
            return await Todo.deleteOne({
                "_id" : id
            });
        } catch (err) {
            console.log('Error occurred while deleting todo in repo', err);
            return err;
        }
    };

    updateTodoById = async (id: number, editedTodo: ITodo): Promise<void> => {
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
}

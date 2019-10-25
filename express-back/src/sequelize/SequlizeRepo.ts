import {Repo} from '../common/Repo';
import {ITodo, QueryResult} from '../common/types';

module.exports = class SequelizeRepo extends Repo {
    Todo: any;
    constructor(todoModel) {
        super();
        this.Todo = todoModel;
    }

    getAllTodos = async (): Promise<ITodo[]> => {
        try {
            return await this.Todo.findAll();
        } catch (err) {
            return err;
        }
    };

    addNewTodo = async (todo: ITodo): Promise<ITodo> => {
        try {
            return await this.Todo.create(todo);
        } catch (err) {
            return err;
        }
    };

    updateTodoById = async (id: number, todo: ITodo): Promise<void> => {
        try {
            return await this.Todo.update(
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

    deleteTodoById = async (id: number): Promise<QueryResult> => {
        try {
            await this.Todo.destroy({
                where: { id }
            });
            return { message: 'Item deleted' };
        } catch (err) {
            return err;
        }
    };
    
};

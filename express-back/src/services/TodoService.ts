import {IService, ITodo, QueryResult} from '../repo/types';
import {Repo} from '../repo/Repo';

export class TodoService implements IService {
    repo: Repo;

    constructor(repo: Repo) {
        this.repo = repo;
    }

    getAllTodos = async (): Promise<ITodo[]> => {
        return await this.repo.getAllTodos();
    };

    addNewTodo = async (reqBody): Promise<ITodo> => {
        const { content } = reqBody;
        const todo: ITodo = {
            content,
            isCompleted: false,
            isEditing: false
        };
        return await this.repo.addNewTodo(todo);
    };

    deleteTodoById = async (id: number): Promise<QueryResult> =>{
        return await this.repo.deleteTodoById(id);
    };

    updateTodoById = async (id: number, reqBody) =>{
        const todo: ITodo = {
            content: reqBody.content,
            isCompleted: reqBody.isCompleted,
            isEditing: reqBody.isEditing
        };
        return await this.repo.updateTodoById(id, todo)
    };
}

import {ITodo, QueryResult} from '../common/types';
import {DB} from '../common/DB';

module.exports = class TodoService {
    database: DB;
    constructor(database) {
        this.database = database;
    }

    getAllTodos = async (): Promise<ITodo[]> => {
        console.log('IM IN IN ');
        return await this.database.getAllTodos();
    };

    addNewTodo = async (reqBody): Promise<ITodo> => {
        const { content } = reqBody;
        const todo: ITodo = {
            content,
            isCompleted: false,
            isEditing: false
        };
        return await this.database.addNewTodo(todo);
    };

    deleteTodoById = async (id: number): Promise<QueryResult> =>{
        return await this.database.deleteTodoById(id);
    };

    updateTodoById = async (id: number, reqBody) =>{
        const todo: ITodo = {
            content: reqBody.content,
            isCompleted: reqBody.isCompleted,
            isEditing: reqBody.isEditing
        };
        return await this.database.updateTodoById(id, todo)
    };
};

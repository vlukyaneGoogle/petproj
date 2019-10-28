import {ITodo, QueryResult} from '../common/types';
import {DB} from '../common/DB';
import {Service} from '../common/Service';

module.exports = class TodoService extends Service {
    database: DB;
    constructor(database) {
        super(database);
        this.database = database;
    }

    getAllTodos = async (): Promise<ITodo[]> => {
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

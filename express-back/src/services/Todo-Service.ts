import {ITodo, QueryResult} from '../common/types';
import {DB} from '../common/DB';

const DIcontainer = require('../index');

module.exports = class TodoService {
    database: DB;
    constructor() {
        this.database = DIcontainer.database;
    }

    async getAllTodos(): Promise<ITodo[]> {
        return await this.database.getAllTodos();
    };

    async addNewTodo(reqBody): Promise<ITodo> {
        const { content } = reqBody;
        const todo: ITodo = {
            content,
            isCompleted: false,
            isEditing: false
        };
        return await this.database.addNewTodo(todo);
    };

    async deleteTodoById(id: number): Promise<QueryResult> {
        return await this.database.deleteTodoById(id);
    };

    async updateTodoById(id: number, reqBody) {
        const todo: ITodo = {
            content: reqBody.content,
            isCompleted: reqBody.isCompleted,
            isEditing: reqBody.isEditing
        };
        return await this.database.updateTodoById(id, todo)
    };
}

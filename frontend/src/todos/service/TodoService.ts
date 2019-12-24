import {ITodo} from '../common/types';
import {sendRequest} from '../../utils/utils';

export class TodoService{

    static async switchTodo(id: string, todos: ITodo[]): Promise<void> {
        const switchedTodo: ITodo = todos.filter((todo) => todo.id === id)[0];
        switchedTodo.isCompleted = !switchedTodo.isCompleted;
        await sendRequest(`todos/update/${id}`, 'PUT',
            {
                'Content-Type': 'application/json',
            },
            JSON.stringify(switchedTodo),
        );
    }

    static async addTodo(content: string): Promise<void> {
        const todoToAdd = {
            content: content
        };
        await sendRequest('todos/add', 'POST',
            {
                'Content-Type': 'application/json',
            },
            JSON.stringify(todoToAdd)
        );
    }

    static async deleteTodo(id: string, todos: ITodo[]): Promise<void> {
        await sendRequest(`todos/delete/${id}`,
            'DELETE',
            {
                'Content-Type': 'application/json'
            }
        );
    }

    static editTodo(id: string, todos: ITodo[]): ITodo[] {
        return todos.map((todo: ITodo) => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                isEditing: !todo.isEditing
            }
        });
    }

    static async updateTodo(content: string, id: string, todos: ITodo[]): Promise<void> {
        const editedTodo: ITodo = todos.filter((todo) => todo.id === id)[0];
        editedTodo.isEditing = !editedTodo.isEditing;
        editedTodo.content = content;
        await sendRequest(`todos/update/${id}`,
            'PUT',
            {
                'Content-Type': 'application/json',
            },
            JSON.stringify(editedTodo)
        );
    }
}

import {ITodo} from '../common/types';

export class TodoService{

    static async switchTodo(id: string, todos: ITodo[]): Promise<void> {
        const switchedTodo: ITodo = todos.filter((todo) => todo.id === id)[0];
        switchedTodo.isCompleted = !switchedTodo.isCompleted;
        await fetch(`http://localhost:3001/todos/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(switchedTodo),
        });
    }

    static async addTodo(content: string): Promise<void> {
        const todoToAdd = {
            content: content
        };
        await fetch("http://localhost:3001/todos/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todoToAdd),
        });
    }

    static async deleteTodo(id: string, todos: ITodo[]): Promise<void> {
        await fetch(`http://localhost:3001/todos/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
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
        await fetch(`http://localhost:3001/todos/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedTodo),
        });
    }
}

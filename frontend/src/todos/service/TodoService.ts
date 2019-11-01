import {ITodo} from '../common/types';

export class TodoService{

    static async switchTodo(id: string, todos: ITodo[]): Promise<ITodo[]> {
        let switchedTodo;
        const newTodos: ITodo[] = todos.map((todo) => {
            if (todo.id !== id) {
                return todo;
            } else {
                switchedTodo ={
                    ...todo,
                    isCompleted: !todo.isCompleted
                };
                return switchedTodo;
            }
        });

        await fetch(`http://localhost:3001/todos/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(switchedTodo),
        });

        return newTodos;
    }

    static async addTodo(content: string): Promise<ITodo> {
        const todoToAdd = {
            content: content
        };
        const addedTodoResponse = await fetch("http://localhost:3001/todos/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todoToAdd),
        });

        const parsedResponse = await addedTodoResponse.json();
        return {
            _id: parsedResponse.result.id,
            id: parsedResponse.result.id,
            content: parsedResponse.result.content,
            isCompleted: parsedResponse.result.isCompleted,
            isEditing: parsedResponse.result.isEditing
        };
    }

    static async deleteTodo(id: string, todos: ITodo[]): Promise<ITodo[]> {
        await fetch(`http://localhost:3001/todos/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return todos.filter(todo => todo.id !== id);
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

    static async updateTodo(content: string, id: string, todos: ITodo[]): Promise<ITodo[]> {
        let editedTodo;
        const newTodos: ITodo[] = todos.map( (todo: ITodo): ITodo => {
            if (todo.id !== id) {
                return todo;
            } else {
                editedTodo = {
                    ...todo,
                    isEditing: !todo.isEditing,
                    content
                };
                return editedTodo;
            }
        });
        await fetch(`http://localhost:3001/todos/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedTodo),
        });
        return newTodos;
    }



}

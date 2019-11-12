import {ITodo} from '../common/types';
import {UpdateTodoData} from '../components/TodoList/TodoList';

const io = require('socket.io-client');

export class SocketService {
    static init () {
        return io.connect('http://localhost:3001/');
    }

    static deleteTodoById(id: string, todos: ITodo[], setTodos: any) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    static addTodo(todo: ITodo, todos: ITodo[], setTodos: any) {
        setTodos([...todos, todo]);
    }

    static updateTodoById(data: UpdateTodoData, todos: ITodo[], setTodos: any) {
        const {updatedTodo, id} = data;
        const {content, isEditing, isCompleted} = updatedTodo;
        const newTodos: ITodo[] = todos.map((todo: ITodo): ITodo =>
            (todo.id !== id)
                ? todo
                : {...todo,
                    isCompleted,
                    isEditing,
                    content
                }
        );
        setTodos(newTodos);
    }
}

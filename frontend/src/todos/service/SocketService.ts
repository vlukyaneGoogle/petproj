import {ITodo} from '../common/types';
import {UpdateTodoData} from '../components/TodoList/TodoList';

const io = require('socket.io-client');

export class SocketService {
    static init () {
        return io.connect('http://localhost:3001/');
    }

    static deleteTodoById(id: string, todos: ITodo[], setTodos: any) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    static addTodo(todo: ITodo, todos: ITodo[], setTodos: any) {
        setTodos([...todos, todo]);
    }

    static switchTodoById(id: string, todos: ITodo[], setTodos: any) {
        const newTodos = todos.map((todo) =>
            (todo.id !== id)
                ? todo
                : { ...todo, isCompleted: !todo.isCompleted }
        );
        setTodos(newTodos);
    }

    static updateTodoById(data: UpdateTodoData, todos: ITodo[], setTodos: any) {
        const {content, id} = data;
        const newTodos: ITodo[] = todos.map((todo: ITodo): ITodo =>
            (todo.id !== id)
                ? todo
                : {...todo, content}
        );
        setTodos(newTodos);
    }
}

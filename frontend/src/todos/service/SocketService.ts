import {ITodo} from '../common/types';
import {UpdateTodoData} from '../components/TodoList/TodoList';
import {allActions} from '../actions';

const io = require('socket.io-client');

export class SocketService {
    static init () {
        return io.connect('http://localhost:3001/');
    }

    static deleteTodoById(id: string, dispatcher: any) {
        dispatcher(allActions.todoActions.deleteTodo(id));
    }

    static addTodo(todo: ITodo, dispatcher: any) {
        dispatcher(allActions.todoActions.addTodo(todo));
    }

    static updateTodoById(data: UpdateTodoData, dispatcher: any) {
        const {updatedTodo, id} = data;
        const {content, isEditing, isCompleted} = updatedTodo;
        dispatcher(allActions.todoActions.updateTodo({content, isEditing, isCompleted, id}));
    }
}

import {Express} from 'express';
import {SocketService} from './SocketService';
import {ITodo} from '../todos/repo/types';
const socket = require('socket.io');

interface UpdateTodoData {
    content: string,
    id: string
}

export class SocketServer {

    static init(server: Express) {
        const io = socket(server);
        io.on('connection', (socket) => {
            socket.on('addTodo', (todo :ITodo) => SocketService.addTodo(socket, todo));
            socket.on('deleteTodo', (id: string) => SocketService.deleteTodo(socket, id));
            socket.on('switchTodo', (id: string) => SocketService.switchTodo(socket, id));
            socket.on('updateTodo', (data: UpdateTodoData) => {
                const { content, id } = data;
                SocketService.updateTodoById(socket, content, id)
            });
            console.log('NEW CONNECTOR: ');
        });
    }

}

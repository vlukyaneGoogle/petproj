"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SocketService_1 = require("./SocketService");
const socket = require('socket.io');
class SocketServer {
    static init(server) {
        const io = socket(server);
        io.on('connection', (socket) => {
            socket.on('newTodo', (todo) => SocketService_1.SocketService.newTodo(socket, todo));
            socket.on('deleteTodo', (id) => SocketService_1.SocketService.deleteTodo(socket, id));
            socket.on('switchTodo', (id) => SocketService_1.SocketService.switchTodo(socket, id));
            socket.on('updateTodo', (data) => {
                const { content, id } = data;
                SocketService_1.SocketService.updateTodoById(socket, content, id);
            });
            console.log('NEW CONNECTOR: ');
        });
    }
}
exports.SocketServer = SocketServer;

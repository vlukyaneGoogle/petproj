export class SocketService {
    static newTodo(socket, todo) {
        socket.broadcast.emit('todoToAdd', todo);
    }

    static deleteTodo(socket, id) {
        socket.broadcast.emit('deleteTodoById', id);
    }

    static switchTodo(socket, id) {
        socket.broadcast.emit('switchTodoById', id);
    }

    static updateTodoById(socket, content, id) {
        console.log(' TRYING UPDATE TODO: ');
        socket.broadcast.emit('updateTodoById', { content, id })
    }
}

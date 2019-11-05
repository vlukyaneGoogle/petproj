export class SocketService {
    static addTodo(socket, todo) {
        socket.broadcast.emit('addTodo', todo);
    }

    static deleteTodo(socket, id) {
        socket.broadcast.emit('deleteTodoById', id);
    }

    static switchTodo(socket, id) {
        socket.broadcast.emit('switchTodoById', id);
    }

    static updateTodoById(socket, content, id) {
        socket.broadcast.emit('updateTodoById', { content, id })
    }
}

const cors = require('cors');
const bodyParser = require('body-parser');
const express = require ('express');
const socket = require('socket.io');
const logger = require('morgan');
const port = process.env.PORT || 3001;
import {DB} from './repo/Repo';
import {TodoController} from './controllers/TodoController';
import {TodoService} from './services/TodoService';
import {RepoFactory} from './repo/RepoFactory';

export class App {

    static init(db: DB) {

        const app = express();
        app.use(logger('dev'));
        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        const repo = RepoFactory.create(db);
        const todoService = new TodoService(repo);
        const todoController = new TodoController(todoService, app);

        app.use("/todos", todoController.getRoutes());
        const server = app.listen(port, function() {
            console.log("Runnning on " + port);
        });

        const users = {};
        const io = socket(3003);

        io.on('connection', function(socket) {

            socket.on('new-user', function(name) {
                console.log('NAME: ', name);
                users[socket.id] = name;
                socket.broadcast.emit('user-connected', name)
            });

            socket.on('send-chat-message', function(message) {
                socket.broadcast.emit('chat-message', {message: message, name: users[socket.id]})
            });

            socket.on('disconnect', function() {
                socket.broadcast.emit('user-disconnected', users[socket.id]);
                console.log(`${users[socket.id]} DISCONNECTED`);
                delete users[socket.id]
            });

            socket.on('add-todo', function(todo) {
                console.log(socket.id, ' add new todo: ', todo);
                socket.broadcast.emit('new-todo', todo);
            })
        });
    }
}

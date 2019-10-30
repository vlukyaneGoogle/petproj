"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const socket = require('socket.io');
const logger = require('morgan');
const port = process.env.PORT || 3001;
const TodoController_1 = require("./controllers/TodoController");
const TodoService_1 = require("./services/TodoService");
const RepoFactory_1 = require("./repo/RepoFactory");
class App {
    static init(db) {
        const app = express();
        app.use(logger('dev'));
        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        const repo = RepoFactory_1.RepoFactory.create(db);
        const todoService = new TodoService_1.TodoService(repo);
        const todoController = new TodoController_1.TodoController(todoService, app);
        app.use("/todos", todoController.getRoutes());
        const server = app.listen(port, function () {
            console.log("Runnning on " + port);
        });
        const users = {};
        const io = socket(3003);
        io.on('connection', function (socket) {
            socket.on('new-user', function (name) {
                console.log('NAME: ', name);
                users[socket.id] = name;
                socket.broadcast.emit('user-connected', name);
            });
            socket.on('send-chat-message', function (message) {
                socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] });
            });
            socket.on('disconnect', function () {
                socket.broadcast.emit('user-disconnected', users[socket.id]);
                console.log(`${users[socket.id]} DISCONNECTED`);
                delete users[socket.id];
            });
            socket.on('add-todo', function (todo) {
                console.log(socket.id, ' add new todo: ', todo);
                socket.broadcast.emit('new-todo', todo);
            });
        });
    }
}
exports.App = App;

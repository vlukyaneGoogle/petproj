"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const port = process.env.PORT || 3001;
const TodoController_1 = require("./controllers/TodoController");
const TodoService_1 = require("./services/TodoService");
class App {
    static init(repo) {
        const app = express();
        app.use(logger('dev'));
        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        const todoService = new TodoService_1.TodoService(repo);
        const todoController = new TodoController_1.TodoController(todoService);
        const router = express_1.Router();
        router.get('/', todoController.getAllTodos);
        router.post('/add', todoController.addNewTodo);
        router.delete('/delete/:id', todoController.deleteTodoById);
        router.put('/update/:id', todoController.updateTodoById);
        app.use("/todos", router);
        app.listen(port, function () {
            console.log("Runnning on " + port);
        });
    }
}
exports.App = App;

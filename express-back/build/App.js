"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
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
        app.listen(port, function () {
            console.log("Runnning on " + port);
        });
    }
}
exports.App = App;

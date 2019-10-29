import { Router } from 'express';

const cors = require('cors');
const bodyParser = require('body-parser');
const express = require ('express');
const logger = require('morgan');
const port = process.env.PORT || 3001;

import {Repo} from './repo/Repo';
import {TodoController} from './controllers/TodoController';
import {TodoService} from './services/TodoService';

export class App {

    static init(repo: Repo) {
        const app = express();

        app.use(logger('dev'));
        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        const todoService = new TodoService(repo);
        const todoController = new TodoController(todoService);

        const router = Router();
        router.get('/', todoController.getAllTodos);
        router.post('/add', todoController.addNewTodo);
        router.delete('/delete/:id', todoController.deleteTodoById);
        router.put('/update/:id', todoController.updateTodoById);
        app.use("/todos", router);

        app.listen(port, function() {
            console.log("Runnning on " + port);
        })

    }
}

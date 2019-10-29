const cors = require('cors');
const bodyParser = require('body-parser');
const express = require ('express');
const logger = require('morgan');
const port = process.env.PORT || 3001;
import {DB} from './repo/Repo';
import {TodoController} from './controllers/TodoController';
import {TodoService} from './services/TodoService';
import {RepoFactory} from './repo/RepoFactory';

export class App {

    static init(db: DB, dbType: string) {
        const app = express();

        app.use(logger('dev'));
        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        const repo = RepoFactory.create(db, dbType);
        const todoService = new TodoService(repo);
        const router = new TodoController(todoService, app).getRoutes();

        app.use("/todos", router);
        app.listen(port, function() {
            console.log("Runnning on " + port);
        })

    }
}

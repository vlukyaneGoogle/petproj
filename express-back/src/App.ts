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
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());

        const repo = RepoFactory.create(db);
        const todoService = new TodoService(repo);
        const todoController = new TodoController(todoService, app);

        app.use("/todos", todoController.getRoutes());
        const server = app.listen(port, function() {
            console.log("Runnning on " + port);
        });

        const io = socket(server);
        console.log(io);
        console.log(server);
        io.on('connection', (socket) => {
            socket.on('newTodo', todo => {
                console.log('NEW TODO: ', todo);
                socket.broadcast.emit('todoToAdd', todo);
            });
            console.log('NEW CONNECTOR: ');
        });

    }
}

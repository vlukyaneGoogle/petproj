import todosRouter from './routes/todos';
import {IContainer} from './common/types';

const port = process.env.PORT || 3001;

let createContainer = require('./container/providers/container');
let isContainerCreated: boolean = false;
let DIcontainer: IContainer;

const connect = async () => {
    if (isContainerCreated) return DIcontainer;
    isContainerCreated = true;
    DIcontainer = await createContainer();
    const app = DIcontainer.App;
    app.use("/todos", todosRouter);
    app.listen(port, function() {
        console.log("Runnning on " + port);
    });
    DIcontainer.database.isConnected();
    return DIcontainer;
};

module.exports = connect();

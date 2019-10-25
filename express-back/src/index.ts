import todosRouter from './routes/todosRouter';

import {IContainer} from './common/types';

const port = process.env.PORT || 3001;

let createContainer = require('./providers/container');
const DIcontainer: IContainer = createContainer();
DIcontainer.database.isConnected();
const app = DIcontainer.App;

app.use("/todos", todosRouter);
app.listen(port, function() {
    console.log("Runnning on " + port);
});

export default DIcontainer;

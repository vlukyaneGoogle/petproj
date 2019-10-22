import todosRouter from './routes/todosRouter';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import logger from 'morgan';

const port = process.env.PORT || 3001;
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/todos", todosRouter);
app.listen(port, function() {
    console.log("Runnning on " + port);
});

export default app;

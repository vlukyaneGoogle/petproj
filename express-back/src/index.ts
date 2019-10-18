const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;
const todosRouter = require("./routes/todos");

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

const app = express();
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/todos", todosRouter);
app.listen(port, function() {
    console.log("Runnning on " + port);
});

module.exports = app;

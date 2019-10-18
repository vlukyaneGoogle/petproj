const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const port = process.env.PORT || 3001;
const todosRouter = require("./routes/todos");
const connectToMongo = require("./models/mongo-models/index");

const app = express();
connectToMongo();
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/todos", todosRouter);
app.listen(port, function() {
    console.log("Runnning on " + port);
});

module.exports = app;

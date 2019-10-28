module.exports = function(c){
    const cors = require('cors');
    const bodyParser = require('body-parser');
    const express = require ('express');
    const logger = require('morgan');
    const port = process.env.PORT || 3001;


    const app = express();
    app.use(logger('dev'));
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use("/todos", c.todoRouter);
    app.listen(port, function() {
        console.log("Runnning on " + port);
    });

    c.declare('App', c => app);
};

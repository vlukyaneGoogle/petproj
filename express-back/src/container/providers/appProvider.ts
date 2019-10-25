module.exports = function(c){
    const cors = require('cors');
    const bodyParser = require('body-parser');
    const express = require ('express');
    const logger = require('morgan');

    const app = express();
    app.use(logger('dev'));
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    c.declare('App', c => app);
};

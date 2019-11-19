"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const port = process.env.PORT || 3001;
class App {
    static init(db) {
        const app = express();
        app.use(logger('dev'));
        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        return app.listen(port, function () {
            console.log("Runnning on " + port);
        });
    }
}
exports.App = App;

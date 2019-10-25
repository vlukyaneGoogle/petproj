"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Container_1 = require("../container/Container");
module.exports = function () {
    let container = new Container_1.Container();
    require('./dbProvider')(container);
    return container;
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
let createContainer = require('./container/providers/container');
const connect = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return yield createContainer();
});
module.exports = connect().then((container) => {
    container.database.isConnected();
    console.log('DI IS READY: ');
    return container.App;
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
let createContainer = require('./container/providers/container');
let isContainerCreated = false;
let DIcontainer;
const connect = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (isContainerCreated)
        return DIcontainer;
    isContainerCreated = true;
    return yield createContainer();
});
const getAsync = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return yield connect();
});
module.exports = getAsync().then(container => {
    DIcontainer = container;
    DIcontainer.database.isConnected();
    console.log('DI IS READY: ');
    return container;
});

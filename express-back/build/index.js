"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const todos_1 = tslib_1.__importDefault(require("./routes/todos"));
const port = process.env.PORT || 3001;
let createContainer = require('./container/providers/container');
let isContainerCreated = false;
let DIcontainer;
const connect = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (isContainerCreated)
        return DIcontainer;
    isContainerCreated = true;
    DIcontainer = yield createContainer();
    const app = DIcontainer.App;
    app.use("/todos", todos_1.default);
    app.listen(port, function () {
        console.log("Runnning on " + port);
    });
    DIcontainer.database.isConnected();
    return DIcontainer;
});
module.exports = connect();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const todosRouter_1 = tslib_1.__importDefault(require("./routes/todosRouter"));
const port = process.env.PORT || 3001;
let createContainer = require('./providers/container');
const DIcontainer = createContainer();
DIcontainer.database.isConnected();
const app = DIcontainer.App;
app.use("/todos", todosRouter_1.default);
app.listen(port, function () {
    console.log("Runnning on " + port);
});
exports.default = DIcontainer;

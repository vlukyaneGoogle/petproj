"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const todos_1 = tslib_1.__importDefault(require("../controllers/todos"));
const router = new express_1.Router();
router.get('/', todos_1.default.getAllTodos);
router.post('/add', todos_1.default.addNewTodo);
router.delete('/delete/:id', todos_1.default.deleteTodoById);
router.put('/update/:id', todos_1.default.updateTodoById);
exports.default = router;

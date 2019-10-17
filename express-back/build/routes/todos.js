"use strict";
const router = require("express").Router();
const todosController = require('../controllers/todosController');
router.get('/', todosController.getAllTodos);
router.post('/add', todosController.addNewTodo);
router.delete('/delete/:id', todosController.deleteTodoById);
router.put('/update/:id', todosController.updateTodoById);
module.exports = router;

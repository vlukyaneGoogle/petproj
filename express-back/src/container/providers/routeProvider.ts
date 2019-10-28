import { Router } from 'express';

module.exports = async function(c){
// @ts-ignore ????
    const router = new Router();
    const todoController = c.todoController;

    router.get('/', todoController.getAllTodos);
    router.post('/add', todoController.addNewTodo);
    router.delete('/delete/:id', todoController.deleteTodoById);
    router.put('/update/:id', todoController.updateTodoById);

    c.declare('todoRouter', c => router);
};

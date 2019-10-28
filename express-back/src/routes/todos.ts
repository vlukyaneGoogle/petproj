import { Router } from 'express';

module.exports = class router {
    constructor(props) {
    }

};

const TodoController = require('../controllers/TodoController');
// @ts-ignore ????
const router = new Router();
console.log('FROM HERE I CAN GEt CONrt');
const todoController = new TodoController();

router.get('/', todoController.getAllTodos);
router.post('/add', todoController.addNewTodo);
router.delete('/delete/:id', todoController.deleteTodoById);
router.put('/update/:id', todoController.updateTodoById);

export default router;

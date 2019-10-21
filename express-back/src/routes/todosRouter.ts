import { Router } from 'express';
import todosController from '../controllers/todosController';
// @ts-ignore ????
const router = new Router();

router.get('/', todosController.getAllTodos);
router.post('/add', todosController.addNewTodo);
router.delete('/delete/:id', todosController.deleteTodoById);
router.put('/update/:id', todosController.updateTodoById);

export default router;

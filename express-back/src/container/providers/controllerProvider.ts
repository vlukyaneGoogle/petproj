const TodoController = require('../../controllers/TodoController');

module.exports = async function(c){
    const todoController = await new TodoController(c.todoService);
    c.declare('todoController', c => todoController );
};

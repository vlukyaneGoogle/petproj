const TodoServices = require('../../services/TodoService');

module.exports = async function(c){
    const service = await new TodoServices(c.database);
    c.declare('todoService', c => service);
};

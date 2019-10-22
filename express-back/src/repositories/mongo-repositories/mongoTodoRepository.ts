import Todo from '../../models/mongo-models/Todo';

const getAllTodos = async () => {
    try {
        return await Todo.find();
    } catch (err) {
        console.log('Error occurred while getting all todos in service', err)
    }
};

const addNewTodo = async (reqBody) => {
    try {
        let todo = new Todo(reqBody);
        return await todo.save();
    } catch (err) {
        console.log('Error occurred while adding new todo in service.', err)
    }
};

const deleteTodo = async (id) => {
    try {
        return await Todo.deleteOne({
            "_id" : id
        });
    } catch (err) {
        console.log('Error occurred while deleting todo in service', err)
    }
};

const updateTodo = async (id, reqBody) => {
    const todo = new Todo(reqBody);
    await Todo.updateOne(
        {
            "_id": id
        },
        {
            "content": todo.content,
            "isCompleted": todo.isCompleted
        }
    );
};

export default {
    getAllTodos,
    addNewTodo,
    deleteTodo,
    updateTodo
};

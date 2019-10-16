import React from 'react';
import TodoEdit from "./components/TodoEdit";
import TodoContent from "./components/TodoContent";
import TodoDelete from "./components/TodoDelete";

const Todo  = ({ todo, switchCompleted, deleteTodo, editTodo }) =>{
    const handleEditTodo = () => {
        editTodo(todo._id)
    };

    const handleDeleteTodo = () => {
        deleteTodo(todo._id);
    };

    const handleSwitchIsCompleted = () => {
        switchCompleted(todo._id)
    };

    return (
        <li
            className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}
        >
            <TodoContent
                content={todo.content}
                switchCompleted={handleSwitchIsCompleted}
            />
            <TodoEdit
                editTodo={handleEditTodo}
            />
            <TodoDelete
                deleteTodo={handleDeleteTodo}
            />
        </li>
    )
};

export default Todo;
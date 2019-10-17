import React from 'react';
import TodoEdit from "./components/TodoEdit";
import TodoContent from "./components/TodoContent";
import TodoDelete from "./components/TodoDelete";
import { ITodo } from "../../../../common/types";

interface IProps {
    todo: ITodo,
    switchCompleted: (id: string) => void,
    deleteTodo: (id: string) => void,
    editTodo: (id: string) => void
}

const Todo: React.FC<IProps>  = ({ todo, switchCompleted, deleteTodo, editTodo }) =>{
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
            className = {`todo-item ${todo.isCompleted ? 'completed' : ''}`}
        >
            <TodoContent
                content = {todo.content}
                switchCompleted = {handleSwitchIsCompleted}
            />
            <TodoEdit
                editTodo = {handleEditTodo}
                enableButton = {!todo.isCompleted}
            />
            <TodoDelete
                deleteTodo = {handleDeleteTodo}
            />
        </li>
    )
};

export default Todo;
import React from 'react';
import TodoEdit from "./components/TodoEdit";
import TodoContent from "./components/TodoContent";
import TodoDelete from "./components/TodoDelete";
import { ITodo } from "../../../../common/types";
import {ListItem} from '@material-ui/core';

interface IProps {
    todo: ITodo,
    switchTodo: (id: string) => void,
    deleteTodo: (id: string) => void,
    editTodo: (id: string) => void
}

const Todo: React.FC<IProps>  = ({ todo, switchTodo, deleteTodo, editTodo }) =>{
    const handleEditTodo = () => {
        editTodo(todo.id)
    };

    const handleDeleteTodo = () => {
        deleteTodo(todo.id);
    };

    const handleSwitchIsCompleted = () => {
        switchTodo(todo.id)
    };

    return (
        <ListItem
            className = {`todo-item`}
        >
            <TodoContent
                content = {todo.content}
                isCompleted = {todo.isCompleted}
                switchCompleted = {handleSwitchIsCompleted}
            />
            <TodoEdit
                editTodo = {handleEditTodo}
                enableButton = {!todo.isCompleted}
            />
            <TodoDelete
                deleteTodo = {handleDeleteTodo}
            />
        </ListItem>
    )
};

export default Todo;

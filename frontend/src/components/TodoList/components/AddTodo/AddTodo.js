import React from 'react';
import AddTodoInput from "./components/AddTodoInput/AddTodoInput";
import AddTodoButton from "./components/AddTodoButton/AddTodoButton";

const AddTodo = ({ addTodo }) => {
    return (
        <form class="add-todo" onSubmit={(e) => addTodo(e)}>
            <AddTodoInput/>
            <AddTodoButton/>
        </form>
    )
};

export default AddTodo;

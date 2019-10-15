import React from 'react';
import TodoEdit from "./components/TodoEdit";
import TodoContent from "./components/TodoContent";
import TodoDelete from "./components/TodoDelete";

const Todo  = ({ todo, switchCompleted, deleteTodo }) =>{
  return (
      <li
          className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}
      >
        <TodoContent
            content = {todo.content}
            id = {todo._id}
            switchCompleted = {switchCompleted}
        />
        <TodoEdit/>
        <TodoDelete
            id = {todo._id}
            deleteTodo = {deleteTodo}
        />
      </li>
  )
};

export default Todo;
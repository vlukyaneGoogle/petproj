import React from 'react';

const TodoDelete = ({ deleteTodo }) => {
    return (
        <div className="todo-button-delete">
            <button onClick={()=> deleteTodo()}>Delete</button>
        </div>
    )
};

export default TodoDelete;
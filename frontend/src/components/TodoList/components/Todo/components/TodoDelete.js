import React from 'react';

const TodoDelete = ({ deleteTodo, id }) => {
    return (
        <div className="todo-button-delete">
            <button onClick={()=> deleteTodo(id)}>Delete</button>
        </div>
    )
};

export default TodoDelete;
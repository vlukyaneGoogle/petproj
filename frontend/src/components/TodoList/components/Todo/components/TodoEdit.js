import React from 'react';

const TodoEdit = ({ editTodo}) => {
    return (
        <div className="todo-button-edit">
            <button onClick={() => editTodo()}>Edit</button>
        </div>
    )
};

export default TodoEdit;
import React from 'react';

const TodoEdit = ({ editTodo, enableButton}) => {
    return (
        <div className="todo-button-edit">
            {enableButton ? (
                <button onClick={() => editTodo()}>
                    Edit
                </button>
            ) : (
                <button>Edit</button>
            )}
        </div>
    )
};

export default TodoEdit;
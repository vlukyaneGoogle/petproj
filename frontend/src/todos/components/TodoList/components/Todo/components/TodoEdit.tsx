import React from 'react';

interface IProps {
    editTodo: () => void,
    enableButton: boolean
}

const TodoEdit: React.FC<IProps> = ({ editTodo, enableButton}) => {
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
import React from 'react';

interface IProps {
    deleteTodo: () => void;
}

const TodoDelete: React.FC<IProps> = ({ deleteTodo }) => {
    return (
        <div className="todo-button-delete">
            <button onClick={()=> deleteTodo()}>Delete</button>
        </div>
    )
};

export default TodoDelete;
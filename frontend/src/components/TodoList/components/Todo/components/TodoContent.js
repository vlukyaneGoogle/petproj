import React from 'react';

const TodoContent = ({ content, id, switchCompleted }) => {
    return (
        <div className="todo-content" onClick={() => switchCompleted(id)}>
            {content}
        </div>
    )
};

export default TodoContent;
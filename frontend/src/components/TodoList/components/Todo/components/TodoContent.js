import React from 'react';

const TodoContent = ({ content, switchCompleted }) => {
    return (
        <div className="todo-content" onClick={() => switchCompleted()}>
            {content}
        </div>
    )
};

export default TodoContent;
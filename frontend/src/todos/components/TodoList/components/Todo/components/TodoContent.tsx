import React from 'react';

interface IProps {
    content: string,
    switchCompleted: () => void
}

const TodoContent: React.FC<IProps> = ({ content, switchCompleted }) => {
    return (
        <div className="todo-content" onClick={() => switchCompleted()}>
            {content}
        </div>
    )
};

export default TodoContent;
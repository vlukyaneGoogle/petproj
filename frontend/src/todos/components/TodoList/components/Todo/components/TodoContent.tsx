import React from 'react';
import {ListItemText} from '@material-ui/core';

interface IProps {
    content: string,
    isCompleted: boolean,
    switchCompleted: () => void
}

const TodoContent: React.FC<IProps> = ({ content, switchCompleted, isCompleted }) => {
    return (
        <ListItemText className={`todo-content ${isCompleted ? 'completed' : ''}`} onClick={() => switchCompleted()} primary={content}/>
    )
};

export default TodoContent;

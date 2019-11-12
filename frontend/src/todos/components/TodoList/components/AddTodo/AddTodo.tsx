import React, { useState } from 'react';
import {TextField, Button} from '@material-ui/core';
import {Add} from '@material-ui/icons';

interface IProps {
    id?: string,
    content?: string,
    addTodo: (term: string) => void,
}

const AddTodo: React.FC<IProps> = ({ content, addTodo }) =>{
    const [term, setTerm] = useState<string>(content || '');

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        if (event.target.value === null) return;
        setTerm(event.target.value);
    };

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        addTodo(term);
        setTerm('');
    };

    return (
        <form className="add-todo" onSubmit={(e) => onFormSubmit(e)}>
            <TextField className="add-todo-input" value={term} type="text"
                   onChange={e => onInputChange(e)}/>
            <Button type='submit' color='primary'><Add/></Button>
        </form>
    )
};

export default AddTodo;


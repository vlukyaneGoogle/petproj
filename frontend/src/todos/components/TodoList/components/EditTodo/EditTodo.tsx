import React, { useState } from 'react';

interface IProps {
    id: string,
    content: string,
    updateTodo: (term: string, id: string) => void,
    buttonText: string
}

const EditTodo: React.FC<IProps> = ({ content, id, updateTodo, buttonText }) =>{
    const [term, setTerm] = useState<string>(content || '');

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event.target.value === null) return;
        setTerm(event.target.value);
    };

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        updateTodo(term, id);
        setTerm('');
    };

    return (
        <form className="add-todo" onSubmit={(e) => onFormSubmit(e)}>
            <input className="add-todo-input" value={term} type="text"
                   onChange={e => onInputChange(e)}/>
            <button>{buttonText}</button>
        </form>
    )
};

export default EditTodo;


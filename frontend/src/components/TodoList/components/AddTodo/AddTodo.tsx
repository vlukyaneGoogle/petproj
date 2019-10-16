import React, {Component} from 'react';

interface IProps {
    id?: number,
    content?: string,
    addTodo: (term: string, id?: number) => void,
    buttonText: string
}

interface IState {
    term: string
}

export default class AddTodo extends Component<IProps> {
    state: IState;
    constructor(props: IProps) {
        super(props);
        this.state = {
            term: this.props.content || '',
        }
    }

    onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event.target.value === null)
        this.setState({
            term : event.target.value
        })
    };

    onFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const { id, addTodo } = this.props;
        const { term } = this.state;
        if (id) {
            addTodo(term, id);
        } else {
            addTodo(term);
        }
        this.setState({
            term: ''
        })
    };

    render() {
        const { buttonText } = this.props;
        return (
            <form className="add-todo" onSubmit={(e) => this.onFormSubmit(e)}>
                <input className="add-todo-input" value={this.state.term} type="text" onChange={ e => this.onInputChange(e)}/>
                <button>{ buttonText }</button>
            </form>
        )

    }
};


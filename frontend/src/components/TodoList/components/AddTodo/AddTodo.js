import React, {Component} from 'react';
import AddTodoInput from "./components/AddTodoInput/AddTodoInput";
import AddTodoButton from "./components/AddTodoButton/AddTodoButton";

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        }
    }

    onInputChange = (event) => {
        this.setState({
            term : event.target.value
        })
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.term);
        this.setState({
            term: ''
        })
    };

    render() {
        return (
            <form className="add-todo" onSubmit={(e) => this.onFormSubmit(e)}>
                <input value={this.state.term} type="text" size="40" onChange={e => this.onInputChange(e)}/>
                <button>Add</button>
            </form>
        )

    }
};


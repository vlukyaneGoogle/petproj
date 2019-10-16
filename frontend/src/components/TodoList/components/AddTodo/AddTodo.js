import React, {Component} from 'react';

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
        const { id } = this.props;
        event.preventDefault();
        if (id) {
            this.props.addTodo(id, this.state.term);
        } else {
            this.props.addTodo(this.state.term);
        }
        this.setState({
            term: ''
        })
    };

    render() {
        const { buttonText } = this.props;
        return (
            <form className="add-todo" onSubmit={(e) => this.onFormSubmit(e)}>
                <input value={this.state.term} type="text" size="40" onChange={e => this.onInputChange(e)}/>
                <button>{ buttonText }</button>
            </form>
        )

    }
};


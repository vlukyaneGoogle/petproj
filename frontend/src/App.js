import React, {Component} from 'react';
import TodoList from "./components/TodoList/TodoList";
import TodoListTitle from "./components/TodoListTitle/TodoListTitie";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      list: true,
      card: false,
      todos: [],
      todo: {}
    };
  }

  showCard = id => {
    fetch(`http://localhost:3001/todos/list/${id}`)
      .then(response => response.json())
      .then(
        responseJson => {
          this.setState({todo: responseJson.data})
        },
      );
    this.setState({
      list: false,
      card: true
    });
  };

  showList = () => {
    this.setState({
      card: false,
      list: true
    });
  };

  render() {
    return (
      <div className="container">
          <TodoListTitle />
          <TodoList />
      </div>
    )
  }
}

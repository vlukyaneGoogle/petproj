import React, {Component} from 'react';
import Todo from "./components/Todo/ToDo";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoListTitle from "./components/TodoListTitle/TodoListTitie";

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:3001/todos/list");
        const responseJson = await response.json();
        await this.setState({
            todos: responseJson.data
        });
    }

    switchCompleted(id) {
        const {todos} = this.state;
        const newTodos = todos.map((todo) => {
            if (todo._id !== id) return todo;
            return {
                ...todo,
                isCompleted: !todo.isCompleted
            }
        });
        this.setState({
            todos: newTodos
        })
    }

    deleteTodo(id) {
        const {todos} = this.state;
        const newTodos = todos.filter(todo => todo._id !== id);
        this.setState({
            todos: newTodos
        })
    }

    editTodo(id) {
        const {todos} = this.state;
        const todoForEdit = todos.map( todo => {
            if (todo._id !== id) return todo;
            return {
                ...todo,
                isEditing: !todo.isEditing
            }
        });
        this.setState({
            todos: todoForEdit
        })

    }

    addTodo(todoTextContent) {
        if (todoTextContent === '') return;
        const {todos} = this.state;
        const todo = {
            _id: new Date().valueOf(),
            content: todoTextContent,
            isCompleted: false,
            isEditing: false
        };
        this.setState({
            todos: [...todos, todo]
        })
    }


    addEditedTodo (id, editedTodoTextContent) {
        if (editedTodoTextContent === '') return;
        const {todos} = this.state;
        const todoForEdit = todos.map( todo => {
            if (todo._id !== id) return todo;
            return {
                ...todo,
                isEditing: !todo.isEditing,
                content: editedTodoTextContent
            }
        });
        this.setState({
            todos: todoForEdit
        })
    }

    render() {
        return (
            <div className="list-group">
              <TodoListTitle />
              <AddTodo
                    addTodo = {this.addTodo.bind(this)}
                    buttonText = {'Add'}
                />
                {this.state.todos.map(todo => {
                    if (todo.isEditing) {
                        return (
                            <AddTodo
                                key = {todo._id}
                                id = {todo._id}
                                addTodo = {this.addEditedTodo.bind(this)}
                                buttonText = {'Edit'}
                            />
                        )
                    } else {
                        return (
                            <Todo
                                key={todo._id}
                                todo={todo}
                                switchCompleted={this.switchCompleted.bind(this)}
                                deleteTodo={this.deleteTodo.bind(this)}
                                editTodo={this.editTodo.bind(this)}
                            />
                        )
                    }
                })}
            </div>
        )
    }
}
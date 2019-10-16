import React, {Component} from 'react';
import Todo from "./components/Todo/ToDo";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoListTitle from "./components/TodoListTitle/TodoListTitie";

interface IProps {
}

interface ICookieOptions {
    [name: string]: any
    // {    ???
    //     path: string,
    //     expires?: Date | string;
    // }
}

interface ITodo {
    _id: number,
    content: string,
    isCompleted: boolean,
    isEditing: boolean
}

interface IState {
    todos: Array<ITodo>
}

export default class TodoList extends Component<IProps> {
    state: IState;
    constructor(props: IProps) {
        super(props);
        this.state = {
            todos: [],
        }
    }

    async componentDidMount() {
        const cookies = this.getCookie('todoList');
        if (typeof cookies === 'undefined') {
            const response = await fetch("http://localhost:3001/todos/list");
            const responseJson = await response.json();
            this.setState({
                todos: responseJson.data
            });
            this.updateCookies(responseJson.data);
        } else {
            this.setState({
                todos: cookies
            });
        }
    }

    getCookie(name: string) {
        const result = document.cookie.match(new RegExp(name + '=([^;]+)'));
        if (!result) return null;
        const parsedResult: Array<ITodo> = JSON.parse(result[1]);
        return parsedResult;
    }

    setCookie(name: string, value: Array<ITodo>, options: ICookieOptions = {}) {

        options = {
            path: '/',
            ...options
        };

        if (options.expires instanceof Date) {
            if (options.expires && options.expires.toUTCString) {
                options.expires = options.expires.toUTCString();
            }
        }

        let updatedCookie = encodeURIComponent(name) + "=" + JSON.stringify(value);

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }

    switchCompleted(id: number) {
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
        this.updateCookies(newTodos);
    }

    deleteTodo(id: number) {
        const {todos} = this.state;
        const newTodos = todos.filter(todo=> todo._id !== id);
        this.setState({
            todos: newTodos
        })
        this.updateCookies(newTodos);
    }

    editTodo(id: number) {
        const {todos} = this.state;
        const todoForEdit = todos.map( (todo: ITodo) => {
            if (todo._id !== id) return todo;
            return {
                ...todo,
                isEditing: !todo.isEditing
            }
        });
        this.setState({
            todos: todoForEdit
        })
        this.updateCookies(todoForEdit);

    }

    addTodo(todoTextContent: string) {
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
        this.updateCookies([...todos, todo]);
    }


    addEditedTodo (id: number, editedTodoTextContent: string) {
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
        this.updateCookies(todoForEdit);
    }

    updateCookies(cookiesValue: Array<ITodo>) {
        this.setCookie('todoList', cookiesValue, {path: '/'});
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
                                content = {todo.content}
                                addTodo = {this.addEditedTodo.bind(this)}
                                buttonText = {'Edit'}
                            />
                        )
                    } else {
                        return (
                            <Todo
                                key = {todo._id}
                                todo = {todo}
                                switchCompleted = {this.switchCompleted.bind(this)}
                                deleteTodo = {this.deleteTodo.bind(this)}
                                editTodo = {this.editTodo.bind(this)}
                            />
                        )
                    }
                })}
            </div>
        )
    }
}
import React, {useState, useEffect} from 'react';
import Todo from "./components/Todo/Todo";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoListTitle from "./components/TodoListTitle/TodoListTitle";
import {ITodo, ICookieOptions} from "../../common/types";

const TodoListExp: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch("http://localhost:3001/todos/list");
            const responseJson = await response.json();
            setTodos(responseJson.data);
            updateCookies(responseJson.data);
        };

        const cookies = getCookie('todoList');
        console.log('TODOS: ', todos, cookies);

        if (cookies === null) {
            fetchData();
        } else {
            setTodos(cookies);
        }
    }, []);

    const getCookie = (name: string): ITodo[] | null => {
        const result = document.cookie.match(new RegExp(name + '=([^;]+)'));
        if (!result) return null;
        const parsedResult: ITodo[] = JSON.parse(result[1]);
        return parsedResult;
    };

    const setCookie = (name: string, value: ITodo[], options: ICookieOptions = {}) => {

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

    const switchCompleted = (id: number) => {
        const newTodos = todos.map((todo) => {
            if (todo._id !== id) return todo;
            return {
                ...todo,
                isCompleted: !todo.isCompleted
            }
        });
        setTodos(newTodos);
        updateCookies(newTodos);
    }

    const deleteTodo = (id: number) => {
        const newTodos = todos.filter(todo => todo._id !== id);
        setTodos(newTodos);
        updateCookies(newTodos);
    }

    const editTodo = (id: number) => {
        const todoForEdit = todos.map((todo: ITodo) => {
            if (todo._id !== id) return todo;
            return {
                ...todo,
                isEditing: !todo.isEditing
            }
        });
        setTodos(todoForEdit);
        updateCookies(todoForEdit);

    };

    const addTodo = (todoTextContent: string) => {
        if (todoTextContent === '') return;
        const todo = {
            _id: new Date().valueOf(),
            content: todoTextContent,
            isCompleted: false,
            isEditing: false
        };
        setTodos([...todos, todo]);
        updateCookies([...todos, todo]);
    }


    const addEditedTodo = (editedTodoTextContent: string, id?: number) => {
        if (editedTodoTextContent === '') return;
        const todoForEdit: ITodo[] = todos.map( (todo: ITodo): ITodo => {
            if (todo._id !== id) return todo;
            return {
                ...todo,
                isEditing: !todo.isEditing,
                content: editedTodoTextContent
            }
        });
        setTodos(todoForEdit);
        updateCookies(todoForEdit);
    }

    const updateCookies = (cookiesValue: ITodo[]) => {
        setCookie('todoList', cookiesValue, {path: '/'});
    }

    return (
        <div className="list-group">
            <TodoListTitle/>
            <AddTodo
                addTodo={addTodo}
                buttonText={'Add'}
            />
            {todos.map( (todo: ITodo) => {
                if (todo.isEditing) {
                    return (
                        <AddTodo
                            key={todo._id}
                            id={todo._id}
                            content={todo.content}
                            addTodo={addEditedTodo}
                            buttonText={'Edit'}
                        />
                    )
                } else {
                    return (
                        <Todo
                            key={todo._id}
                            todo={todo}
                            switchCompleted={switchCompleted}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                        />
                    )
                }
            })}
        </div>
    )
};

export default TodoListExp;
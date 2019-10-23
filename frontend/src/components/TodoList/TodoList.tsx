import React, {useState, useEffect} from 'react';
import Todo from "./components/Todo/Todo";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoListTitle from "./components/TodoListTitle/TodoListTitle";
import { ITodo } from "../../common/types";

const TodoListExp: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {

        const fetchData = async () => {
            const allTodos = await fetch("http://localhost:3001/todos/");
            const allTodosJson = await allTodos.json();
            if (Array.isArray(allTodosJson.data)) setTodos(allTodosJson.data);
        };

        fetchData();
    }, []);

    const switchCompleted = async (id: string) => {
        let swithedTodo;
        const newTodos = todos.map((todo) => {
            if (todo.id !== id) {
                return todo;
            } else {
               swithedTodo ={
                ...todo,
                    isCompleted: !todo.isCompleted
                };
               return swithedTodo;
            }
        });

        await fetch(`http://localhost:3001/todos/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(swithedTodo),
        });

        setTodos(newTodos);
    };

    const deleteTodo = async (id: string) => {
        const deletedTodoResponse = await fetch(`http://localhost:3001/todos/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    };

    const editTodo = (id: string) => {
        const todoForEdit = todos.map((todo: ITodo) => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                isEditing: !todo.isEditing
            }
        });
        setTodos(todoForEdit);
    };

    const addTodo = async (todoTextContent: string) => {
        if (todoTextContent === '') return;
        const todoToAdd = {
            content: todoTextContent
        };
        const addedTodoResponse = await fetch("http://localhost:3001/todos/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todoToAdd),
        });

        const parsedResponse = await addedTodoResponse.json();
        const newTodo = {
            _id: parsedResponse.result.id,
            id: parsedResponse.result.id,
            content: parsedResponse.result.content,
            isCompleted: parsedResponse.result.isCompleted,
            isEditing: parsedResponse.result.isEditing
        };
        setTodos([...todos, newTodo]);
    };


    const addEditedTodo = async (editedTodoTextContent: string, id?: string) => {
        if (editedTodoTextContent === '') {
            return;
        }
        //????????
        let editedTodo;
        const editedTodoArray: ITodo[] = todos.map( (todo: ITodo): ITodo => {
            if (todo.id !== id) {
                return todo;
            } else {
                editedTodo = {
                    ...todo,
                    isEditing: !todo.isEditing,
                    content: editedTodoTextContent
                };
                return editedTodo;
            }
        });
        await fetch(`http://localhost:3001/todos/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedTodo),
        });
        setTodos(editedTodoArray);
    };

    console.log('HOBA :', todos);

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
                            key={todo.id}
                            id={todo.id}
                            content={todo.content.trim()}
                            addTodo={addEditedTodo}
                            buttonText={'Edit'}
                        />
                    )
                } else {
                    return (
                        <Todo
                            key={todo.id}
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

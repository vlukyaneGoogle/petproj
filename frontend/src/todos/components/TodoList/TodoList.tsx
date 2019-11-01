import React, {useState} from 'react';
import Todo from "./components/Todo/Todo";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoListTitle from "./components/TodoListTitle/TodoListTitle";
import {ITodo} from "../../common/types";
import {TodoService} from '../../service/TodoService';
import EditTodo from './components/EditTodo/EditTodo';
import {useTodosEffects} from './components/useTodosEffects';

const io = require('socket.io-client');
export const socket = io.connect('http://localhost:3001/');

export interface UpdateTodoData {
    content: string,
    id: string
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useTodosEffects(todos, setTodos);

    const switchTodo = async (id: string) => {
        socket.emit('switchTodo', id);
        const newTodos: ITodo[]  = await TodoService.switchTodo(id, todos);
        setTodos(newTodos);
    };

    const deleteTodo = async (id: string) => {
        socket.emit('deleteTodo', id);
        const newTodos = await TodoService.deleteTodo(id, todos);
        setTodos(newTodos);
    };

    const editTodo = (id: string) => {
        const newTodos = TodoService.editTodo(id, todos);
        setTodos(newTodos);
    };

    const addTodo = async (content: string) => {
        if (content === '') return;
        const newTodo = await TodoService.addTodo(content);
        setTodos([...todos, newTodo]);
        socket.emit('newTodo', newTodo);
    };

    const updateTodo = async (content: string, id: string) => {
        if (content === '') {
            return;
        }
        socket.emit('updateTodo', {content, id});
        const newTodos = await TodoService.updateTodo(content, id, todos);
        setTodos(newTodos);
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
                        <EditTodo
                            key={todo.id}
                            id={todo.id}
                            content={todo.content.trim()}
                            updateTodo={updateTodo}
                            buttonText={'Edit'}
                        />
                    )
                } else {
                    return (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            switchTodo={switchTodo}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                        />
                    )
                }
            })}
        </div>
    )
};

export default TodoList;

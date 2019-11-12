import React from 'react';
import Todo from "./components/Todo/Todo";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoListTitle from "./components/TodoListTitle/TodoListTitle";
import {ITodo} from "../../common/types";
import {TodoService} from '../../service/TodoService';
import EditTodo from './components/EditTodo/EditTodo';
import {useTodosEffects} from './components/useTodosEffects';
import {SocketService} from '../../service/SocketService';
import {List} from '@material-ui/core'

export const socket = SocketService.init();

export interface UpdateTodoData {
    updatedTodo: ITodo,
    id: string
}

const TodoList: React.FC = () => {
    const {todos, setTodos} = useTodosEffects();

    const switchTodo = async (id: string) => {
        await TodoService.switchTodo(id, todos);
    };

    const deleteTodo = async (id: string) => {
        await TodoService.deleteTodo(id, todos);
    };

    const editTodo = (id: string) => {
        const newTodos = TodoService.editTodo(id, todos);
        setTodos(newTodos);
    };

    const addTodo = async (content: string) => {
        if (content === '') return;
        await TodoService.addTodo(content);
    };

    const updateTodo = async (content: string, id: string) => {
        if (content === '') {
            return;
        }
        await TodoService.updateTodo(content, id, todos);
    };

    console.log('My todos :', todos);

    return (
        <List className="list-group">
            <TodoListTitle/>
            <AddTodo
                addTodo={addTodo}
            />
            {todos.map( (todo: ITodo) => {
                if (todo.isEditing) {
                    return (
                        <EditTodo
                            key={todo.id}
                            id={todo.id}
                            content={todo.content.trim()}
                            updateTodo={updateTodo}
                            buttonText={'Save'}
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
        </List>
    )
};

export default TodoList;

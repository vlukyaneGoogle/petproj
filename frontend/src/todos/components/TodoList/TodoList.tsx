import React from 'react';
import {Todo} from "./components/Todo/Todo";
import {AddTodo} from "./components/AddTodo/AddTodo";
import TodoListTitle from "./components/TodoListTitle/TodoListTitle";
import {ITodo} from "../../common/types";
import {TodoService} from '../../service/TodoService';
import {useTodosEffects} from './components/useTodosEffects';
import {SocketService} from '../../service/SocketService';
import {List} from '@material-ui/core'
import {useInfiniteScroll} from './components/useInfiniteScroll';

export const socket = SocketService.init();

export interface UpdateTodoData {
    updatedTodo: ITodo,
    id: string
}

const TodoList: React.FC = () => {
    const {todos, setTodos} = useTodosEffects();

    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreTodos);

    async function fetchMoreTodos() {
        console.log('My time is come');
        const token = todos.length > 0
            ? todos[todos.length - 1]._id
            : '5ddb999110f4793d1523abff';
        if (todos.length > 0) {

        }
        const allTodos = await fetch(`http://localhost:3001/todos/${token}`);
        const allTodosJson = await allTodos.json();
        console.log('UPDAteD TODOS: ', allTodosJson.data);
        if (Array.isArray(allTodosJson.data)) setTodos([...todos, ...allTodosJson.data]);
        // @ts-ignore
        setIsFetching(false);
    }

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

    const updateTodo = async (id: string, content: string) => {
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
                return (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        switchTodo={switchTodo}
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                        editTodo={editTodo}
                    />
                )
            })}
        </List>
    )
};

export default TodoList;

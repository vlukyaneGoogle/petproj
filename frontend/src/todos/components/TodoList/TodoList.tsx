import React, {useEffect, useState} from 'react';
import {Todo} from "./components/Todo/Todo";
import {AddTodo} from "./components/AddTodo/AddTodo";
import TodoListTitle from "./components/TodoListTitle/TodoListTitle";
import {ITodo} from "../../common/types";
import {TodoService} from '../../service/TodoService';
import {useTodosEffects} from './components/useTodosEffects';
import {SocketService} from '../../service/SocketService';
import {List as VirtualizedList} from 'react-virtualized';

export const socket = SocketService.init();

export interface UpdateTodoData {
    updatedTodo: ITodo,
    id: string
}

interface IProps {
    todos: ITodo[],
    setTodos: any,
    scroll: number,
    setScroll: any
}

const TodoList: React.FC<IProps> = ({todos, setTodos, scroll, setScroll}) => {
    const [isFetching, setIsFetching] = useState(false);

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

    // @ts-ignore
    const listRenderer = ({key, index, style}) =>
    {
        const todo = todos[index];
        return (<div style={style} key={key}>
                <Todo
                    key={todo.id}
                    todo={todo}
                    switchTodo={switchTodo}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                    editTodo={editTodo}
                />
            </div>
        );
    };

    const scrollHandler = (e: any) => {
        const {clientHeight, scrollHeight, scrollTop} = e;
        setScroll(scrollTop);
        if (clientHeight + scrollTop !== scrollHeight || isFetching) return;
        setIsFetching(true);
    };

    useEffect(() => {
        if (!isFetching) return;
        fetchMoreTodos();
    }, [isFetching]);

    async function fetchMoreTodos() {
        const token = todos[todos.length - 1]._id;
        const allTodos = await fetch(`http://localhost:3001/todos/scroll/${token}`);
        const allTodosJson = await allTodos.json();
        if (Array.isArray(allTodosJson.data)) {
            setTodos([...todos, ...allTodosJson.data]);
        }
        setIsFetching(false);
    }

    const rowHeight = 50;
    const height = 600;
    const width = 600;

    return (
        <>
            <TodoListTitle/>
            <AddTodo
                addTodo={addTodo}
            />
            <VirtualizedList
                rowCount={todos.length}
                rowHeight={rowHeight}
                width={width}
                height={height}
                scrollTop={scroll}
                rowRenderer={listRenderer}
                onScroll={(e: any) => scrollHandler(e)}
            />
        </>
    )
};

export default TodoList;

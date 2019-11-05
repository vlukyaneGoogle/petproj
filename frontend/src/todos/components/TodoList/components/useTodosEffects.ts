import {useEffect, useState} from 'react';
import {ITodo} from '../../../common/types';
import {socket, UpdateTodoData} from '../TodoList';
import {SocketService} from '../../../service/SocketService';

export const useTodosEffects = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const allTodos = await fetch("http://localhost:3001/todos/");
            const allTodosJson = await allTodos.json();
            if (Array.isArray(allTodosJson.data)) setTodos(allTodosJson.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        socket.on('deleteTodoById', (id: string) =>  SocketService.deleteTodoById(id, todos, setTodos));
        return () => socket.off('deleteTodoById');
    }, [todos]);

    useEffect(() => {
        socket.on('addTodo', (todo: ITodo) => SocketService.addTodo(todo, todos, setTodos));
        return () => socket.off('todoToAdd');
    }, [todos]);

    useEffect(() => {
        socket.on('switchTodoById', (id: string) => SocketService.switchTodoById(id, todos, setTodos));
        return () => socket.off('switchTodoById');
    },[todos]);

    useEffect(() => {
        socket.on('updateTodoById', (data: UpdateTodoData) => SocketService.updateTodoById(data, todos, setTodos));
        return () => socket.off('updateTodoById');
    }, [todos]);


    return {
        todos,
        setTodos
    }
};

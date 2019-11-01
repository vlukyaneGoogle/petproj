import {useEffect} from 'react';
import {ITodo} from '../../../common/types';
import {socket, UpdateTodoData} from '../TodoList';

export const useTodosEffects = (todos: ITodo[], setTodos: any) => {
    useEffect(() => {
        const fetchData = async () => {
            const allTodos = await fetch("http://localhost:3001/todos/");
            const allTodosJson = await allTodos.json();
            if (Array.isArray(allTodosJson.data)) setTodos(allTodosJson.data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        socket.on('deleteTodoById', (id: string) => {
            setTodos(todos.filter(todo => todo.id !== id))
        });
        return () => {
            socket.off('deleteTodoById');
        }
    }, [todos]);

    useEffect(() => {
        socket.on('todoToAdd', (todo: ITodo) => {
            setTodos([...todos, todo]);
        });
        return () => {
            socket.off('todoToAdd');
        }
    }, [todos]);

    useEffect(() => {
        socket.on('switchTodoById', (id: string) => {
            const newTodos = todos.map((todo) => {
                if (todo.id !== id) {
                    return todo;
                } else {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    }
                }
            });
            setTodos(newTodos);
        });

        return () => {
            socket.off('switchTodoById');
        }
    },[todos]);

    useEffect(() => {
        socket.on('updateTodoById', (data: UpdateTodoData) => {
            const { content, id } = data;
            const newTodos: ITodo[] = todos.map( (todo: ITodo): ITodo => {
                if (todo.id !== id) {
                    return todo;
                } else {
                    return {
                        ...todo,
                        content
                    };
                }
            });

            setTodos(newTodos);
        });
        return () => {
            socket.off('updateTodoById');
        }
    }, [todos]);
};

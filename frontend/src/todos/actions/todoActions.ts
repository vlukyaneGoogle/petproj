import {allActions} from './index';
import {ITodo} from '../common/types';
import {sendRequest} from '../../utils/utils';

const fetchTodos = (dispatcher: any, id?: string) => {
    return (dispatcher: any) => {
        sendRequest(`todos/${id}`, 'GET')
            .then(res => res.json())
            .then(jsonTodos => {
                const fetchedTodos = Array.isArray(jsonTodos.data) ? jsonTodos.data : [];
                dispatcher(allActions.todoActions.saveTodos(fetchedTodos));
            })
    }
};

const addTodo = (newTodo: any) => {
    return {
        type: todoActionsNames.ADD_TODO,
        payload: newTodo
    }
};

const saveTodos = (todos: ITodo[]) => {
    return {
        type: todoActionsNames.SAVE_TODOS,
        payload: todos
    }
};

const editTodo = (id: string) => {
    return {
        type: todoActionsNames.EDIT_TODO,
        payload: id
    }
};

const updateTodo = (newTodo: any) => {
    return {
        type: todoActionsNames.UPDATE_TODO,
        payload: newTodo
    }
};

const deleteTodo = (id: string) => {
    return {
        type: todoActionsNames.DELETE_TODO,
        payload: id
    }
};


const todoActionsNames = {
    ADD_TODO: 'ADD_TODO',
    EDIT_TODO: 'EDIT_TODO',
    UPDATE_TODO: 'UPDATE_TODO',
    DELETE_TODO: 'DELETE_TODO',
    SAVE_TODOS: 'SAVE_TODOS',
    FETCH_TODOS: 'FETCH_TODOS_START',
    FETCH_TODOS_SUCCESS: 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_FAIL: 'FETCH_TODOS_FAIL',
};

export const todoActions = {
    addTodo,
    editTodo,
    updateTodo,
    deleteTodo,
    saveTodos,
    fetchTodos
};

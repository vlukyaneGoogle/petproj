const loadTodos = (todos: any) => {
    return {
        type: todoActionsNames.LOAD_TODOS,
        payload: todos
    }
};

const addTodo = (newTodo: any) => {
    return {
        type: todoActionsNames.ADD_TODO,
        payload: newTodo
    }
};

const toggleTodo = (newTodo: any) => {
    return {
        type: todoActionsNames.TOGGLE_TODO,
        payload: newTodo
    }
};

const updateTodo = (newTodo: any) => {
    return {
        type: todoActionsNames.UPDATE_TODO,
        payload: newTodo
    }
};

const deleteTodo = (newTodo: any) => {
    return {
        type: todoActionsNames.DELETE_TODO,
        payload: newTodo.id
    }
};


const todoActionsNames = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    UPDATE_TODO: 'UPDATE_TODO',
    DELETE_TODO: 'DELETE_TODO',
    LOAD_TODOS: 'LOAD_TODOS',
};

export const todoActions = {
    addTodo,
    toggleTodo,
    updateTodo,
    deleteTodo,
    loadTodos
};

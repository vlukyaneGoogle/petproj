import React, {Suspense, useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TodoList from './todos/components/TodoList/TodoList';
import Paper from '@material-ui/core/Paper';
import {ThemeProvider} from '@material-ui/styles';
import {theme} from './theme';
import {useTodosEffects} from './todos/components/TodoList/components/useTodosEffects';

const TodoInfo = React.lazy(() => import('./todos/lazy-components/TodoInfo/TodoInfo'));

const renderLoader = () => (
    <p> Loading..</p>
);

const App: React.FC = () => {
    const {todos, setTodos} = useTodosEffects();
    const [scroll, setScroll] = useState(0);
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Paper className="container">
                    <Switch>
                        <Route exact path={'/'} render={() =>
                            <TodoList
                                todos={todos}
                                setTodos={setTodos}
                                scroll={scroll}
                                setScroll={setScroll}
                            />}
                        />
                        <Suspense fallback={() => renderLoader()}>
                            <Route path='/todo/:todoId' component={TodoInfo}/>
                        </Suspense>
                    </Switch>
                </Paper>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;

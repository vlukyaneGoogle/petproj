import React from 'react';
import TodoList from "./todos/components/TodoList/TodoList";
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/styles';
import {theme} from './theme';

const App: React.FC = () => {

  return (
      <ThemeProvider theme={theme}>
          <Paper className="container">
              <TodoList/>
          </Paper>
      </ThemeProvider>
  )
};

export default App;

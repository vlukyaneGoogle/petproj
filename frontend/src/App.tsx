import React from 'react';
import TodoList from "./todos/components/TodoList/TodoList";
import Paper from '@material-ui/core/Paper';
import {createMuiTheme} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const App: React.FC = () => {
    const theme = createMuiTheme({
        typography: {
            h1: {
                fontSize: 30
            },
        },
        overrides: {
            MuiList: {
                root: {
                    width: 400
                }
            }
        }
    });
  return (
      <ThemeProvider theme={theme}>
          <Paper className="container">
              <TodoList/>
          </Paper>
      </ThemeProvider>
  )
};

export default App;

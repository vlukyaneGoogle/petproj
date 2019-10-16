import React from 'react';
import TodoList from "./components/TodoList/TodoList";
import TodoListExp from "./components/TodoList/TodoListTemp";

const App: React.FC = () => {
  return (
      <div className="container">
        <TodoListExp/>
      </div>
  )
};

export default App;

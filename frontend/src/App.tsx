import React from 'react';
import TodoList from "./todos/components/TodoList/TodoList";

const App: React.FC = () => {
  return (
      <div className="container">
        <TodoList/>
      </div>
  )
};

export default App;

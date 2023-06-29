import React from 'react';
import TodoList from './pages/TodoList';

function App() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-4xl">Todo List</h1>
      </div>
      <div>
        <TodoList />
      </div>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => state.todo);

  return (
    <>
      <div className="container mx-auto max-w-md p-4">
        <TodoInput />
        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <TodoItem key={index} todo={todo.task} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;

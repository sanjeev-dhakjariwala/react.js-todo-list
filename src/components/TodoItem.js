import React from 'react';

const TodoItem = ({ todo }) => {
  const deleteTodo = () => {};
  return (
    <>
      <li className="flex items-center justify-between bg-white px-4 py-2 border border-gray-300 rounded">
        <span>{todo}</span>
        <button
          className="text-red-500 hover:text-red-600 focus:outline-none"
          onClick={deleteTodo}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoItem;

import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoAPI, fetchTodos, updateTodoAPI } from '../slices/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteTodo = async () => {
    await dispatch(deleteTodoAPI(todo?.id));
    dispatch(fetchTodos());
  };

  const updateTodo = async () => {
    await dispatch(updateTodoAPI(todo?.id));
    dispatch(fetchTodos());
  };
  return (
    <>
      <li
        className={`flex items-center justify-between ${
          todo?.status ? 'bg-green-500' : 'bg-white'
        } px-4 py-2 border border-gray-300 rounded`}
      >
        <span>{todo?.task + ' at ' + todo?.completeAt}</span>
        <div className="flex flex-row">
          <button
            className="text-green-500 hover:text-green-600 focus:outline-none mr-4"
            onClick={updateTodo}
          >
            {!todo?.status ? `Done` : ''}
          </button>
          <button
            className="text-red-500 hover:text-red-600 focus:outline-none"
            onClick={deleteTodo}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default TodoItem;

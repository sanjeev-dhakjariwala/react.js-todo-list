import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, fetchTodos } from '../slices/todoSlice';

const Input = () => {
  const [value, setValue] = useState('');
  const [time, setTime] = useState('');
  const dispatch = useDispatch();

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onTimeChange = (event) => {
    setTime(event.target.value);
  };

  const onAdd = async () => {
    if (value.trim() !== '') {
      // Combine value and time to represent the todo with a timestamp
      
      // Dispatch addTodo to add the new todo
      await dispatch(addTodo({task: value, completeAt: time}));

      // Fetch the updated list of todos
      dispatch(fetchTodos());
    }
    setValue('');
    setTime('');
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
        placeholder="Add a new task"
        value={value}
        onChange={onChange}
      />
      <input
        type="time"
        className="border border-gray-300 px-4 py-2 focus:outline-none"
        value={time}
        onChange={onTimeChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-r px-6 py-2"
        onClick={onAdd}
      >
        Add
      </button>
    </div>
  );
};

export default Input;

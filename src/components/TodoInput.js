import React, { useState } from 'react';

const Input = () => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onAdd = () => {};
  return (
    <div className="flex mb-4">
      <input
        type="text"
        className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
        placeholder="Add a new task"
        value={value}
        onChange={onChange}
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

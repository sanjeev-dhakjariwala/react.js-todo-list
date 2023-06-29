import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchTodos = createAsyncThunk('todo/fetchTodos', async () => {
  try {
    const response = await axios.get(
      'https://649ad5a4bf7c145d02398e92.mockapi.io/api/v1/todo'
    );
    return response?.data;
  } catch (error) {
    throw Error('Error getting TODO!!!');
  }
});

export const addTodo = createAsyncThunk('todo/addTodo', async (todo) => {
  try {
    const response = await axios.post(
      'https://649ad5a4bf7c145d02398e92.mockapi.io/api/v1/todo',
      { task: todo, status: false }
    );
    return response?.data;
  } catch (error) {
    throw Error('Error adding todo!!!');
  }
});

export const deleteTodoAPI = createAsyncThunk(
  'todo/deleteTodoAPI',
  async (id) => {
    try {
      const response = await axios.delete(
        `https://649ad5a4bf7c145d02398e92.mockapi.io/api/v1/todo/${id}`
      );
      return response?.data;
    } catch (error) {
      throw Error('Error deleting todo!!!');
    }
  }
);

export const updateTodoAPI = createAsyncThunk(
  'todo/updateTodoAPI',
  async (id) => {
    try {
      const response = await axios.put(
        `https://649ad5a4bf7c145d02398e92.mockapi.io/api/v1/todo/${id}`,
        { status: true }
      );
      return response?.data;
    } catch (error) {
      throw Error('Error deleting todo!!!');
    }
  }
);

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action) => {
      // Add logic to handle adding a todo
    },
    update: (state, action) => {
      // Add logic to handle updating a todo
    },
    deleteTodo: (state, action) => {
      // Add logic to handle deleting a todo
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export const { add, update, edit, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

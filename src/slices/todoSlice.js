import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  try {
    const response = await axios.get(
      'https://649ad5a4bf7c145d02398e92.mockapi.io/api/v1/todo'
    );
    return response.data;
  } catch (error) {
    throw Error('Error getting TODO!!!');
  }
});

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
    edit: (state, action) => {
      // Add logic to handle editing a todo
    },
    deleteTodo: (state, action) => {
      // Add logic to handle deleting a todo
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { add, update, edit, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

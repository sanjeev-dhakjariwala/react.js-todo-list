import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { fetchTodos } from './slices/todoSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer
  }
});
store
  .dispatch(fetchTodos())
  .then(() => {
    console.log('Initial todos fetched successfully!');
  })
  .catch((error) => {
    console.error('Error fetching initial todos:', error);
  });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

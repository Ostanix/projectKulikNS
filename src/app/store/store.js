import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import apiReducer from './apiSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    api: apiReducer,
  },
});

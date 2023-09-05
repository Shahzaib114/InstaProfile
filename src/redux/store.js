import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './slice/toDoSlice';

export const store = configureStore({
    reducer: {
        toDoList: toDoReducer, // Use the reducer from the toDoSlice object
    },
});
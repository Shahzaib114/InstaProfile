import { createSlice } from '@reduxjs/toolkit'

export const toDoSlice = createSlice({
    name: 'toDoList',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            // let newState = { ...state, ...action.payload };
            state.push(action.payload)
            // return newState;
        },
        removeTask: (state, action) => {
            const selectedIds = action.payload;
            return state.filter(task => !selectedIds.includes(task.id));
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTask, removeTask } = toDoSlice.actions

export default toDoSlice.reducer
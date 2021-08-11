import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo(state, action) {
            const todoToAdd = {
                id: uuidv4(),
                text: action.payload,
                completed: false
            }
            console.log(todoToAdd)

            state.push(todoToAdd)
        },
        toggleTodo(state, action) {
            const todoToToggle = state.find(todo => todo.id === action.payload)

            if(todoToToggle) {
                todoToToggle.completed = !todoToToggle.completed
            }
        }
    }
})

export const selectTodos = state => state.todos;

export const { addTodo, toggleTodo } = todosSlice.actions
export default todosSlice.reducer
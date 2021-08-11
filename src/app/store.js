import { configureStore } from "@reduxjs/toolkit";
import todosSlice from '../features/todos/todosSlice';

export default configureStore({
    reducer: {
        weather: {},
        todos: todosSlice,
        quote: {}
    }
})
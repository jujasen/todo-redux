import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../features/todos/todosSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import nowSlice from "../features/now/nowSlice";
import weatherSlice from "../features/weather/weatherSlice";

const reducers = combineReducers({
  todos: todosSlice,
  now: nowSlice,
  weather: weatherSlice
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
});

export default store;
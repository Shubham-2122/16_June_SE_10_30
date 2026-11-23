import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "../features/counter/counterSlice";
import  todoSlice  from "../features/todolist/todoSlice";

export const store = configureStore({
    reducer:{
        counter : counterSlice,
        todos : todoSlice,
    }
})
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo : ["jay","ketan"]
}

export const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo : (state,action)=>{
            state.todo.push(action.payload)
        },
        deleteTodo:(state,action)=>{
            state.todo = state.todo.filter((data,index) => index !== action.payload)
        },
        editTodo : (state,action)=>{
            
        }
    }
})

export const {addTodo,deleteTodo} = todoSlice.actions

export default todoSlice.reducer
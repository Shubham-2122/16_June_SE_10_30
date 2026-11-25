import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const readData = createAsyncThunk(
    'readDate',async(data,{rejectWithValue})=>{
        try {
            const res = await axios.get("http://localhost:3000/users")
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const userSlice = createSlice({
    name:"userDetails",
    initialState : {
        loading : true,
        users : [],
        isreject : ""
    },
    reducers:{
        userPending:(state,action)=>{
            state.loading = action.payload
        },
        userFullfiled :(state,action)=>{
            state.loading = false
            state.users.push(action.payload)
        },
        userRejected:(state,action)=>{
            state.loading = false
            state.isreject = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(readData.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(readData.fulfilled,(state,action)=>{
            state.loading = false
            state.users = action.payload
        })
        .addCase(readData.rejected,(state,action)=>{
            state.loading = false
            state.isreject = action.payload
        })
    }
    
})

export const {userPending,userFullfiled,userRejected} = userSlice.actions
export default userSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const adminread = createAsyncThunk(
    'adminread',async(data,{rejectWithValue})=>{
        try {
            const res = await axios.get("http://localhost:3000/admin")
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const adminSlice =createSlice({
    name:"adminDetails",
    initialState : {
         loading : true,
        admins : [],
        isreject : ""
    },
    reducers:{
        adminPending:(state,action)=>{
            state.loading = action.payload
        },
        adminFullfiled :(state,action)=>{
            state.loading = false
            state.admins.push(action.payload)
        },
        adminRejected:(state,action)=>{
            state.loading = false
            state.isreject = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
                .addCase(adminread.pending,(state,action)=>{
                    state.loading = true
                })
                .addCase(adminread.fulfilled,(state,action)=>{
                    state.loading = false
                    state.admins = action.payload
                })
                .addCase(adminread.rejected,(state,action)=>{
                    state.loading = false
                    state.isreject = action.payload
                })
        
    }
})


export const {adminFullfiled,adminPending,adminRejected} = adminSlice.actions 
export default adminSlice.reducer;
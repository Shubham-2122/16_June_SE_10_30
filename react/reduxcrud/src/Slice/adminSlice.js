import { createSlice } from "@reduxjs/toolkit";

export const adminSlice =createSlice({
    name:"adminDetails",
    initialState : {
         loading : true,
        admins : [],
        isreject : ""
    },
    reducers:{

    }
})


export const {} = adminSlice.actions 
export default adminSlice.reducer;
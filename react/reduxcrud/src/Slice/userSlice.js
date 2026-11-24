import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({
    name:"userDetails",
    initialState : {
        loading : true,
        users : [],
        isreject : ""
    },
    reducers:{

    },
    extraReducers:{

    }
})

export const {} = userSlice.actions
export default userSlice.reducer
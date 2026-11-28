import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const readData = createAsyncThunk(
    'readDate', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.get("http://localhost:3000/users")
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const createUser = createAsyncThunk(
    'createUser', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("http://localhost:3000/users", data)
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const deleteuser = createAsyncThunk(
    'deleteuser', async (id, { rejectWithValue }) => {
        try {
            const res = await axios.delete(`http://localhost:3000/users/${id}`)
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const edituser = createAsyncThunk(
    'edituser', async (data, { rejectWithValue }) => {
        try {
            const res = await axios.put(`http://localhost:3000/users/${data.id}`, data)
            const result = res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const userSlice = createSlice({
    name: "userDetails",
    initialState: {
        loading: true,
        users: [],
        isreject: ""
    },
    reducers: {
        userPending: (state, action) => {
            state.loading = action.payload
        },
        userFullfiled: (state, action) => {
            state.loading = false
            state.users.push(action.payload)
        },
        userRejected: (state, action) => {
            state.loading = false
            state.isreject = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(readData.pending, (state, action) => {
                state.loading = true
            })
            .addCase(readData.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(readData.rejected, (state, action) => {
                state.loading = false
                state.isreject = action.payload
            })

            // create user
            .addCase(createUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false
                state.users.push(action.payload)
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false
                state.isreject = action.payload
            })

            // delete data
            .addCase(deleteuser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(deleteuser.fulfilled, (state, action) => {
                state.loading = false
                state.users = state.users.filter((data) => data.id !== action.payload.id)
            })
            .addCase(deleteuser.rejected, (state, action) => {
                state.loading = false
                state.isreject = action.payload
            })

            // edit
            .addCase(edituser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(edituser.fulfilled, (state, action) => {
                state.loading = false
                state.users = state.users.map((data) => data.id === action.payload.id ? action.payload.id : data )
            })
            .addCase(edituser.rejected, (state, action) => {
                state.loading = false
                state.isreject = action.payload
            })

    }

})

export const { userPending, userFullfiled, userRejected } = userSlice.actions
export default userSlice.reducer
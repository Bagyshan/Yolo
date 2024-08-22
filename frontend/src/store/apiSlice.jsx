import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const apiUrl = process.env.REACT_APP_API_URL;
export const instance = axios.create({
    baseURL: apiUrl,
})
export const postApplication = createAsyncThunk(
    "api/postApplication",
    async (application , { rejectWithValue }) => {
        try {
            const response = await instance.post(`/application/`, application);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
const apiSlice = createSlice({
    name: 'api',
    initialState:{
        loading: false,
        error: null,
    },
    reducers:{},
    extraReducers:(builder) =>{
        builder
            .addCase(postApplication.pending, (state) => {
                state.loading = true;
            })
            .addCase(postApplication.fulfilled, (state,{payload}) => {
                state.loading = false;
            })
            .addCase(postApplication.rejected, (state) => {
                state.loading = false;
            });
    }
})
export default apiSlice.reducer;
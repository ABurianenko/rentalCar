import { createSlice } from "@reduxjs/toolkit"
import fetchCarInfo from "./operations"

const initialState = {
    car: null,
    isLoading: false,
    error: null,
}

const carSlice = createSlice({
    name: 'car',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchCarInfo.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCarInfo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.car = action.payload;
            })
            .addCase(fetchCarInfo.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
        })
    }
})

export const carReducer = carSlice.reducer;
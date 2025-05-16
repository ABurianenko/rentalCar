import { createSlice } from "@reduxjs/toolkit"
import { getBrands } from "./operations"

const initialState = {
    brands: [],
    isLoading: false,
    error: null,
}

const brandsSlice = createSlice({
    name: 'brands',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getBrands.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBrands.fulfilled, (state, action) => {
                state.isLoading = false;
                state.brands = action.payload;
            })
            .addCase(getBrands.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
        })
    }
})

export const brandsReducer = brandsSlice.reducer;
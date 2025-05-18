import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalog } from "./operations";

const initialState = {
    cars: [],
    isLoading: false,
    error: null,
    page: 1,
    limit: 12,
    totalPages: 1,
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        resetCars(state) {
            state.cars = [];
            state.page = 1;
            state.totalPages = 1;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCatalog.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCatalog.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.payload.page === 1) {
                    state.cars = action.payload.cars;
                } else {
                    state.cars = [...state.cars, ...action.payload.cars];
                }
                state.totalPages = action.payload.totalPages;
                state.page = action.payload.page;
            })
            .addCase(fetchCatalog.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
        })
    }
})

export const catalogReducer = catalogSlice.reducer;
export const { resetCars } = catalogSlice.actions;
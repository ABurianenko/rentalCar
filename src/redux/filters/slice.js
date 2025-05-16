import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: {
        brand: '',
        price: '',
        minMileage: '',
        maxMileage: '',
    }
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setBrand(state, action) {
            state.filters.brand = action.payload;
        },
        setPrice(state, action) {
            state.filters.price = action.payload;
        },
        setMinMileage(state, action) {
            state.filters.mileage.from = action.payload;
        },
        setMaxMileage(state, action) {
            state.filters.mileage.to = action.payload;
        },
        clearFilters(state) {
            state.filters = initialState.filters;
        },
    },
});

export const { setBrand, setPrice, setMinMileage, setMaxMileage, clearFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/slice";
import { catalogReducer } from "./catalog/slice";
import { brandsReducer } from "./brands/slice";

export const store = configureStore({
    reducer: {
        brands: brandsReducer,
        catalog: catalogReducer,
        filters: filtersReducer,
    },
})
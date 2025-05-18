import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/slice";
import { catalogReducer } from "./catalog/slice";
import { brandsReducer } from "./brands/slice";
import { carReducer } from "./car/slice";

export const store = configureStore({
    reducer: {
        brands: brandsReducer,
        catalog: catalogReducer,
        filters: filtersReducer,
        carInfo: carReducer,
    },
})
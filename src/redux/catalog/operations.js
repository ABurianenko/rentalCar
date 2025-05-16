import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCars } from "../../services/API";

export const fetchCatalog = createAsyncThunk('catalog/fetchAll', async ({filters, limit, page}, thunkAPI) => {
    try {
        const res = await getAllCars(filters, limit, page);
        return {
            cars: res.cars,
            page: res.page, 
            totalPages: res.totalPages,
        };
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
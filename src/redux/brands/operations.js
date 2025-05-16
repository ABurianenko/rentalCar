import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBrands } from "../../services/API";

export const getBrands = createAsyncThunk(
    'brands/getAllBrands',
    async (_, thunkAPI) => {
        try {
            const res = await getAllBrands();
            
            return res;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCarById } from "../../services/API";

const fetchCarInfo = createAsyncThunk(
    'car/fetchCarInfo',
    async (id, thunkAPI) => {
        try {
            const res = await getCarById(id);
            
            return res;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export default fetchCarInfo;
import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { fetchEarthquakesAPI } from "../services/api";

export const fetchEarthquakes = createAsyncThunk(
    'earthquake/fetchEarthquakes',
    async ( { starttime,endtime, magnitude } ) => {
        try{
            return await fetchEarthquakesAPI(starttime, endtime, magnitude);
        }
         catch(error) {
            throw error
         }
         
    }
)


const earthquakeSlice = createSlice({
    name: 'earthquake',
    initialState: {
        data: [],
        loading: false,
        error:false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
       .addCase(fetchEarthquakes.pending,(state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchEarthquakes.fulfilled,(state, action) => {
            state.loading = false;
            state.date = action.payload;
            state.error = false
        })
        .addCase(fetchEarthquakes.rejected,(state) => {
            state.error = true
            state.loading = false
        })
    }
})

export default earthquakeSlice.reducer;
    
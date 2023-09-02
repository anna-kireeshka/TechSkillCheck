import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {DirectionsDTO} from "../shared/types/types";
import {InitialState} from "../shared/types/general"
import axios from 'axios';

const initialState: InitialState<Array<DirectionsDTO>> = {
    data: [],
    loading: 'idle'

}
export const fetchDirections = createAsyncThunk<DirectionsDTO[]>(
    '/direction/getDirections',
    async() => {
        const response = await axios.get(('http://127.0.0.1:8081/api/v1/directions'))
        return response.data
    }
    )

const directionsSlice = createSlice({
    name: 'direction',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchDirections.fulfilled, (state, action) => {
                state.loading = "succeeded"
                state.data = [...action.payload];
        })
    }
})

export const getDirectionsStatus = (state: InitialState<DirectionsDTO>) => state.loading
export const getDirections = (state: any) => state.direction.data

export default directionsSlice.reducer

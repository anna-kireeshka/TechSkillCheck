import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {TechnologiesDTO} from "../shared/types/types";
import {InitialState} from "../shared/types/general";
import axios from "axios";

const initialState: InitialState<Array<TechnologiesDTO>> = {
    data: [],
    loading: 'idle',
}

export const fetchTechnologies = createAsyncThunk<TechnologiesDTO[]>(
    '/technology/getTechnologies',
    async() => {
        const response = await axios.get(('http://127.0.0.1:8081/api/v1/technologies'))
        return response.data
    }
)

const technologiesSlice = createSlice({
    name: 'technology',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTechnologies.fulfilled, (state, action) => {
                state.data =[...action.payload];
            })
    }
})

export const getTechnologies = (state: any) => state.technology.data

export default technologiesSlice.reducer

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {TechnologiesDTO} from "../shared/types/types";
import {InitialState} from "../shared/types/general";
import {HTTP} from "../shared/api/api";

const initialState: InitialState<TechnologiesDTO> = {
    data: {} as TechnologiesDTO,
    loading: "loading",
};

export const fetchTechnologies = createAsyncThunk(
    "/technology/getTechnologies",
    async (params: { id: number, lang: string }, thunkAPI) => {
        const response = await HTTP.get(
            `/technologies?direction_id=${params.id}&lang=${params.lang}`
        );
        return response.data;
    }
);

const technologiesSlice = createSlice({
    name: "technology",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchTechnologies.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = state.data.total === 0 ? "failed" : "loading"
        });
        builder.addCase(fetchTechnologies.rejected, (state, action) => {
            state.loading = "failed";
        });
    },
});

export const getTechnologies = (state: { technology: InitialState<TechnologiesDTO> }) => state.technology.data;
export const getTechnologiesStatus = (state: { technology: InitialState<TechnologiesDTO> }) => state.technology.loading
export default technologiesSlice.reducer;

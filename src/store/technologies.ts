import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {TechnologiesDTO} from "../shared/types/types";
import {InitialState} from "../shared/types/general";
import {HTTP} from "../shared/api/api";

const initialState: InitialState<TechnologiesDTO> = {
    data: {} as TechnologiesDTO,
    loading: "idle",
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
        });
    },
});

export const getTechnologies = (state: any) => state.technology.data;
export default technologiesSlice.reducer;

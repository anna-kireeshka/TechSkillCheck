import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {TechnologiesDTO} from "../shared/types/types";
import {InitialState} from "../shared/types/general";
import {HTTP} from "../shared/api/api";

const initialState: InitialState<TechnologiesDTO> = {
    data: {} as TechnologiesDTO,
    status: "idle",
    error: "",
};


export const fetchTechnologies = createAsyncThunk(
    "/technology/getTechnologies",
    async (params: { id: number, lang: string }, {rejectWithValue}) => {
        try {
            const response = await HTTP.get(
                `/technologies?direction_id=${params.id}&lang=${params.lang}`
            );

            if (response.data.total === 0 || response.statusText === "No Content") throw new Error('Data is enpty');

            return response.data;
        } catch (err: any) {
            return rejectWithValue({error: err.message})
        }

    }
);

const technologiesSlice = createSlice({
    name: "technology",
    initialState,
    reducers: {
        updateStatus: (state, action) => {
            if (state.status !== action.payload) {
                return {...state, status: action.payload};
            }
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchTechnologies.pending, (state) => {
            state.status = "pending";
        });
        builder.addCase(fetchTechnologies.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = "successfully"
        });
        builder.addCase(fetchTechnologies.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.name;
        });
    },
});

export const getTechnologies = (state: { technology: InitialState<TechnologiesDTO> }) => state.technology.data;
export const getTechnologiesStatus = (state: { technology: InitialState<TechnologiesDTO> }) => state.technology.status
export const {updateStatus} = technologiesSlice.actions;
export default technologiesSlice.reducer;

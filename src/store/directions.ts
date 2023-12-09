import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {DirectionsDTO} from "../shared/types/types";
import {InitialState} from "../shared/types/general";
import {HTTP} from "../shared/api/api";

interface ExtendedInitialState extends InitialState<DirectionsDTO> {
    directionId?: number;
}

export const fetchDirections = createAsyncThunk(
    "fetchDirections",
    async (lang: string, {rejectWithValue}) => {
        try {
            const response = await HTTP.get(`/directions?lang=${lang}`);

            if (response.data.total === 0 || response.statusText === "No Content") throw new Error('Error');

            return await response.data;
        } catch (err: any) {
            return rejectWithValue({error: err.message})
        }
    }
);

const initialState: ExtendedInitialState = {
    data: {} as DirectionsDTO,
    status: "idle",
    directionId: 0,
};

const directionsSlice = createSlice({
    name: "direction",
    initialState,
    reducers: {
        setDirectionsId: (state, action) => {
            return {...state, directionId: action.payload};
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchDirections.pending, (state) => {
            state.status = "pending";
        });
        builder.addCase(fetchDirections.fulfilled, (state, action) => {
            state.status = "successfully";
            state.data = action.payload;
        });
        builder.addCase(fetchDirections.rejected, (state, action) => {
            state.status = "failed";
        });
    },
});

export const getDirectionsStatus = (state: any) => state.direction.status;
export const getDirections = (state: any) => state.direction.data;
export const getDirectionsId = (state: any) => state.direction.directionId;
export const {setDirectionsId} = directionsSlice.actions;

export default directionsSlice.reducer;

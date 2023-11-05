import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {DirectionsDTO} from "../shared/types/types";
import {InitialState} from "../shared/types/general";
import {HTTP} from "../shared/api/api";

interface ExtendedInitialState extends InitialState<DirectionsDTO> {
    directionId?: number;
}

const initialState: ExtendedInitialState = {
    data: {} as DirectionsDTO,
    loading: "loading",
    directionId: 0,
};
export const fetchDirections = createAsyncThunk(
    "/direction/getDirections",
    async (lang: string) => {
        const response = await HTTP.get(`/directions?lang=${lang}`);
        return response.data;
    }
);

const directionsSlice = createSlice({
    name: "direction",
    initialState,
    reducers: {
        setDirectionsId: (state, action) => {
            return {...state, directionId: action.payload};
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchDirections.fulfilled, (state, action) => {
            state.loading = "loading";
            state.data = action.payload;
        });
    },
});

export const getDirectionsStatus = (state: any) => state.direction.loading;
export const getDirections = (state: any) => state.direction.data;
export const getDirectionsId = (state: any) => state.direction.directionId;
export const {setDirectionsId} = directionsSlice.actions;

export default directionsSlice.reducer;

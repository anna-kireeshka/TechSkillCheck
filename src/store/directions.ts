import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DirectionsDTO } from "../shared/types/types";
import { InitialState } from "../shared/types/general";
import { HTTP } from "../shared/api/api";

const initialState: InitialState<DirectionsDTO> = {
  data: {} as DirectionsDTO,
  loading: "idle",
};
export const fetchDirections = createAsyncThunk(
  "/direction/getDirections",
  async (lang:"ru" | "eng") => {
    const response = await HTTP.get(`/directions?lang=${lang}`);
    return response.data;
  }
);

const directionsSlice = createSlice({
  name: "direction",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDirections.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    });
  },
});

export const getDirectionsStatus = (state: InitialState<DirectionsDTO>) =>
  state.loading;
export const getDirections = (state: any) => state.direction.data;

export default directionsSlice.reducer;

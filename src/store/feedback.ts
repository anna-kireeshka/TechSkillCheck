import { createAsyncThunk, createSlice, AsyncThunk } from "@reduxjs/toolkit";
import { FormDTO } from "../shared/types/types";
import { InitialState } from "../shared/types/general";
import { HTTP } from "../shared/api/api";

const initialState: InitialState<FormDTO> = {
  data: {} as FormDTO,
  loading: "idle",
};

export const fetchFeedback = createAsyncThunk(
  "/feedback/fetchFeedbackForm",
  async (request: FormDTO) => {
    const response = await HTTP.post(`/feedback`, request);
    return response.data;
  }
);

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchFeedback.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const fetchFfetchFeedbackForm = (state: any) => state.technology.data;

export default feedbackSlice.reducer;

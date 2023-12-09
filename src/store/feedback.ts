import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {FormDTO} from "../shared/types/types";
import {InitialState} from "../shared/types/general";
import {HTTP} from "../shared/api/api";

interface CustomInitialState extends InitialState<FormDTO> {
    isOpenForm: boolean,
}

const initialState: CustomInitialState = {
    data: {} as FormDTO,
    status: "idle",
    isOpenForm: false,
};

export const fetchFeedback = createAsyncThunk(
    "/feedback/fetchFeedbackForm",
    async (request: FormDTO, {rejectWithValue}) => {
        try {
            const response = await HTTP.post(`/feedback`, request);
            return response.data;
        } catch (err: any) {
            return rejectWithValue({error: err.message})
        }

    }
);

const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.status = action.payload
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchFeedback.pending, (state, action) => {
                state.status = 'pending'
            })

            .addCase(fetchFeedback.fulfilled, (state, action) => {
                state.status = "successfully";
                state.data = action.payload;
            })
            .addCase(fetchFeedback.rejected, (state) => {
                state.status = "failed";
            })
    },
});

export const fetchFeedbackForm = (state: any) => state.feedback.data;
export const statusFeedback = (state: { feedback: InitialState<FormDTO> }) => state.feedback.status
export const {setLoading} = feedbackSlice.actions;

export default feedbackSlice.reducer;

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {FormDTO} from "../shared/types/types";
import {InitialState} from "../shared/types/general";
import {HTTP} from "../shared/api/api";

interface CustomInitialState extends InitialState<FormDTO> {
    isOpenForm: boolean,
}

const initialState: CustomInitialState = {
    data: {} as FormDTO,
    loading: "loading",
    isOpenForm: false,
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
    reducers: {
        setLoading: (state, action) => {
            return {...state, loading: action.payload};
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchFeedback.pending, (state, action) => {
                state.loading = 'loading'
            })

            .addCase(fetchFeedback.fulfilled, (state, action) => {
                state.loading = "loading";
                state.data = action.payload;
            });
    },
});

export const fetchFeedbackForm = (state: any) => state.feedback.data;
export const statusFeedback = (state: { feedback: InitialState<FormDTO> }) => state.feedback.loading
export const {setLoading} = feedbackSlice.actions;

export default feedbackSlice.reducer;

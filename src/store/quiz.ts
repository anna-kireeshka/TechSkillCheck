import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {QuizDTO, QuizResultDTO} from "../shared/types/types";
import {InitialState, NextTestQueryRequest} from "../shared/types/general";
import {HTTP} from "../shared/api/api";

interface ExtendedInitialState extends InitialState<QuizDTO> {
    optionId?: number;
    result?: QuizResultDTO[]
}

const initialState: ExtendedInitialState = {
    data: {} as QuizDTO,
    loading: "loading",
    optionId: 0,
    result: [],
};

export const fetchQuiz = createAsyncThunk(
    "/quiz/getQuiz",
    async (params: { id: number; lang: string }) => {
        const response = await HTTP.get(
            `/quiz/start?technology_id=${params.id}&lang=${params.lang}`
        );
        return response.data;
    }
);

export const fetchNextQuiz = createAsyncThunk(
    "/quiz/getNextQuiz",
    async (query: NextTestQueryRequest) => {
        const response = await HTTP.post(`/quiz/next`, query);
        return response.data;
    }
);

export const fetchResultQuiz = createAsyncThunk(
    "/quiz/getResultQuiz",
    async (params: { id: number; lang: string }) => {
        const response = await HTTP.get(
            `/quiz/result?quiz_id=${params.id}&lang=${params.lang}`
        );
        return response.data;
    }
);

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setAnswer: (state, action) => {
            return {...state, optionId: action.payload};
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchQuiz.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = action.payload === '' || action.payload === null ? "failed" : "loading"
            })
            .addCase(fetchQuiz.rejected, (state, action) => {
                state.loading = "failed";
            })
            .addCase(fetchNextQuiz.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(fetchResultQuiz.fulfilled, (state, action) => {
                state.result = action.payload
            })
    },
});

export const getQuiz = (state: any) => state.quiz.data;
export const getResult = (state: any) => state.quiz.result;
export const getOptionId = (state: any) => state.quiz.optionId;
export const getLoadingStatus = (state: any) => state.quiz.loading

export const {setAnswer} = quizSlice.actions;
export default quizSlice.reducer;

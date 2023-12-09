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
    status: "idle",
    optionId: 0,
    result: [],
};

export const fetchQuiz = createAsyncThunk(
    "/quiz/getQuiz",
    async (params: { id: number; lang: string }, {rejectWithValue}) => {
        try {
            const response = await HTTP.get(
                `/quiz/start?technology_id=${params.id}&lang=${params.lang}`
            );

            console.log(response)
            if (response.statusText === "No Content") {
                throw new Error()
            }
            return response.data;
        } catch (err: any) {
            return rejectWithValue({error: err.message})
        }
    }
);

export const fetchNextQuiz = createAsyncThunk(
    "/quiz/getNextQuiz",
    async (query: NextTestQueryRequest, {rejectWithValue}) => {
        try {
            const response = await HTTP.post(`/quiz/next`, query);
            if (response.statusText === "No Content") {
                throw new Error()
            }
            return response.data;
        } catch (err: any) {
            return rejectWithValue({error: err.message})
        }

    }
);

export const fetchResultQuiz = createAsyncThunk(
    "/quiz/getResultQuiz",
    async (params: { id: number; lang: string }, {rejectWithValue}) => {
        try {
            const response = await HTTP.get(
                `/quiz/result?quiz_id=${params.id}&lang=${params.lang}`
            );
            if (response.statusText === "No Content") {
                throw new Error()
            }
            return response.data;
        } catch (err: any) {
            return rejectWithValue({error: err.message})
        }

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
                state.status = "successfully"
            })
            .addCase(fetchQuiz.rejected, (state, action) => {
                state.status = "failed";
            })
            .addCase(fetchNextQuiz.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = "successfully"
            })
            .addCase(fetchNextQuiz.rejected, (state) => {
                state.status = "failed"
            })
            .addCase(fetchResultQuiz.fulfilled, (state, action) => {
                state.result = action.payload;
                state.status = "successfully"
            })
            .addCase(fetchResultQuiz.rejected, (state) => {
                state.status = "failed"
            })
    },
});

export const getQuiz = (state: any) => state.quiz.data;
export const getResult = (state: any) => state.quiz.result;
export const getOptionId = (state: any) => state.quiz.optionId;
export const getLoadingStatus = (state: any) => state.quiz.status

export const {setAnswer} = quizSlice.actions;
export default quizSlice.reducer;

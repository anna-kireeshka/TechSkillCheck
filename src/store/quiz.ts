import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {QuizDTO} from "../shared/types/types";
import { InitialState } from "../shared/types/general"
import axios from 'axios';

const initialState: InitialState<Array<QuizDTO>> = {
    data: [],
    loading: 'idle',
}
export const fetchQuiz = createAsyncThunk<QuizDTO[]>(
    '/quiz/getQuiz',
    async() => {
        const response = await axios.get(('http://127.0.0.1:8081/api/v1/question'))
        return response.data
    }
)

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchQuiz.fulfilled, (state, action) => {
                state.loading = "succeeded"
                state.data = [...action.payload];
            })
    }
})

export const getQuiz = (state: any) => state.quiz.data

export default quizSlice.reducer

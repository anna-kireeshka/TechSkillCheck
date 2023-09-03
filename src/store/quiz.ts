import {
  createAsyncThunk,
  createSlice,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";
import { QuizDTO } from "../shared/types/types";
import { InitialState, NextTestQueryRequest } from "../shared/types/general";
import { HTTP } from "../shared/api/api";

interface ExtendedInitialState extends InitialState<QuizDTO> {
  optionId?: number;
}
const initialState: ExtendedInitialState = {
  data: {} as QuizDTO,
  loading: "idle",
  optionId: 0,
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
    const response = await HTTP.post(
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
        return { ...state, optionId: action.payload };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuiz.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchNextQuiz.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
  },
});

export const getQuiz = (state: any) => state.quiz.data;
export const getOptionId = (state: any) => state.quiz.optionId;

export const { setAnswer } = quizSlice.actions
export default quizSlice.reducer;

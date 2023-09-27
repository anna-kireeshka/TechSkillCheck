import { configureStore } from '@reduxjs/toolkit'
import  directionsSlice from "./directions";
import technologiesSlice from './technologies'
import quizSlice from './quiz'
import feedbackSlice from "./feedback"

export const store = configureStore({
    reducer: {
        direction: directionsSlice,
        technology: technologiesSlice,
        quiz: quizSlice,
        feedback: feedbackSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

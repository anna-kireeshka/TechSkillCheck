import { configureStore } from '@reduxjs/toolkit'
import  directionsSlice from "./directions";
import technologiesSlice from './technologies'
import quizSlice from './quiz'

export const store = configureStore({
    reducer: {
        direction: directionsSlice,
        technology: technologiesSlice,
        quiz: quizSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

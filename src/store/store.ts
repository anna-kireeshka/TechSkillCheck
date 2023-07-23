import { configureStore } from '@reduxjs/toolkit'
import  directionsSlice from "./directions";
import technologiesSlice from './technologies'

export const store = configureStore({
    reducer: {
        direction: directionsSlice,
        technology: technologiesSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

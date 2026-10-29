import { configureStore } from '@reduxjs/toolkit'
import puppiesReducer from './features/puppies/puppySlice'

export const store = configureStore({
    reducer: {
        puppies: puppiesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

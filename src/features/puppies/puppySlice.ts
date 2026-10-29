import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import {Puppy} from "../../types";
import {getPuppies} from "../../queries";

// Define a type for the slice state
export interface PuppiesState {
    value: Puppy[]
    status: 'idle' | 'pending' | 'succeeded' | 'failed'
}

// Define the initial state using that type
const initialState: PuppiesState = {
    value: [],
    status: 'idle',
}

// Wrap the plain API function so it gets pending/fulfilled/rejected actions
export const fetchPuppies = createAsyncThunk('puppies/fetch', getPuppies)

export const puppySlice = createSlice({
    name: 'puppies',
    initialState,
    reducers: {
        puppyUpdated: (state, action: PayloadAction<Puppy>) => {
            const i = state.value.findIndex(p => p.id === action.payload.id)
            if (i !== -1) state.value[i] = action.payload
        },
        puppyAdded: (state, action: PayloadAction<Puppy>) => {
            state.value.push(action.payload)
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPuppies.pending, state => {
                state.status = 'pending'
            })
            .addCase(fetchPuppies.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.value = action.payload
            })
            .addCase(fetchPuppies.rejected, state => {
                state.status = 'failed'
            })
    }
})

export const selectPuppies = (state: RootState) => state.puppies.value

export const { puppyUpdated, puppyAdded } = puppySlice.actions

export default puppySlice.reducer
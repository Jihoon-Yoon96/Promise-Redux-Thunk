import { createSlice } from "@reduxjs/toolkit";

interface Test {
    value: number
}

const initialState:Test = {
    value: 0
}

const test = createSlice({
    name: "test",
    initialState,
    reducers: {
        add: (state, action: {payload: number}) => {
            state.value += action.payload
        },
        minus: (state, action: {payload: number}) => {
            state.value -= action.payload
        }
    }
})

export const {add, minus} = test.actions;
export default test.reducer;
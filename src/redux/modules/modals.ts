import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { JSXElementConstructor, ReactNode } from "react";

interface Modal {
    key: number;
    close: void;
    conmponents: ReactNode;
}

interface ModalsState {
    modals: Modal[];
}

const initialState: ModalsState = {
    modals: []
}

const modals = createSlice({
    name: "modals",
    initialState,
    reducers: {
        openModal : (state, action: PayloadAction<Modal>) => {
            state.modals.push(action.payload);
        },
        closeModal : (state, action: PayloadAction<number>) => {
            state.modals = state.modals.filter((modal)=> modal.key !== action.payload)
        }
    }
});

export const { openModal, closeModal } = modals.actions;
export default modals.reducer;
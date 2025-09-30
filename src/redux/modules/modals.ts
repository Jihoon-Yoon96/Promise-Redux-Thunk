import { createSlice, PayloadAction, ThunkAction, Action } from "@reduxjs/toolkit";
import React from "react";
import { RootState } from "../config/store";

// 스토어에 저장될 개별 모달의 타입
export interface ModalState {
  id: number;
  component: React.ComponentType<any>;
  title: React.ReactNode;
  props?: any;
  close: (result?: any) => void;
}

// 이 슬라이스가 관리할 상태의 전체 타입
interface ModalsSliceState {
  modals: ModalState[];
}

// Thunk 액션 생성자의 props 타입
interface ModalThunkProps {
  component: React.ComponentType<any>;
  title: React.ReactNode;
  props?: any;
}

const initialState: ModalsSliceState = {
  modals: [],
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalState>) => {
      console.log('openModal action', action);
      
      state.modals.push(action.payload);
    },
    closeModal: (state, action: PayloadAction<number>) => {
      state.modals = state.modals.filter((modal) => modal.id !== action.payload);
    },
  },
});

export const { openModal, closeModal } = modalsSlice.actions;

// 커스텀 Thunk 액션 생성자
export const openModalWithPromise = (modalProps: ModalThunkProps): ThunkAction<Promise<any>, RootState, unknown, Action<string>> => (dispatch) => {
  return new Promise((resolve) => {
    const id = Math.floor(Math.random() * 10000);
    console.log('modalProps', modalProps);

    const close = (result?: any) => {
      resolve(result);
      dispatch(closeModal(id));
    };

    dispatch(openModal({ id, ...modalProps, close }));
  });
};

export default modalsSlice.reducer;


import { configureStore } from "@reduxjs/toolkit";
import modals from "../modules/modals";
import test from "../modules/test";

const store = configureStore({
  reducer: {
    modals,
    test,
  },
  // 직렬화 불가능한 값(함수 등)에 대한 경고를 비활성화합니다.
  // 이 프로젝트의 모달 시스템에서는 close 함수를 상태에 저장하므로 필요합니다.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// RootState 타입을 스토어의 상태로부터 추론하여 정의합니다.
// 이 타입을 useSelector 사용 시 state의 타입으로 지정할 수 있습니다.
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch 타입을 정의하여 Thunk 액션을 올바르게 처리할 수 있도록 합니다.
// 이 타입을 useDispatch의 제네릭 타입으로 사용합니다.
export type AppDispatch = typeof store.dispatch;

export default store;


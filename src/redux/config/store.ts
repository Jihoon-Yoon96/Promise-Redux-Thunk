import { configureStore } from "@reduxjs/toolkit";
import modals from "../modules/modals";
import test from "../modules/test";

const store = configureStore({
  reducer: {
    modals,
    test,
  },
});

export default store
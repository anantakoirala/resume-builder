"use client";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { modalReducer } from "./modal/modalSlice";
import { resumeReducer } from "./resume/resumeSlice";
import { contextMenuReducer } from "./ContextMenuSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    modal: modalReducer,
    resume: resumeReducer,
    contextMenu: contextMenuReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

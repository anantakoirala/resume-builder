"use client";
import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { modalReducer } from "./modal/modalSlice";
import { resumeReducer, setBasicSection } from "./resume/resumeSlice";
import { contextMenuReducer } from "./ContextMenuSlice";

const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  type: "resume/setBasicSection",

  effect: async (action, listenerApi) => {
    console.log("hello");
  },
});
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    modal: modalReducer,
    resume: resumeReducer,
    contextMenu: contextMenuReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

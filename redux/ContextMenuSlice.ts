"use client";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  clicked: boolean;
}
const initialState: InitialState = {
  clicked: false,
};
const contextMenuSlice = createSlice({
  name: "contextMenu",
  initialState,
  reducers: {
    setContextMenuClicked: (state) => {
      state.clicked = true;
    },
    removeClicked: (state) => {
      state.clicked = false;
    },
  },
});

export const { setContextMenuClicked, removeClicked } =
  contextMenuSlice.actions;
export const contextMenuReducer = contextMenuSlice.reducer;

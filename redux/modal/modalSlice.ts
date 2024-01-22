"use client";
import { SectionKey } from "@/schema";
import { createSlice } from "@reduxjs/toolkit";

interface ModalInterace<T> {
  isOpen: boolean;
  name: "resume" | SectionKey;
  mode: "create" | "update";
  id?: string;
}
const initialState = {
  isOpen: false,
  name: "",
  mode: "",
  id: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.name = action.payload[0];
      state.mode = action.payload[1];
      state.id = action.payload[2];
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.name = "";
      state.mode = "";
      state.id = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

"use client";
import {
  createAsyncThunk,
  createSlice,
  current,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Resumes } from "@/schema/resumes";
import { ResumeData } from "@/schema";
import { DefaultResumeData, Resume } from "@/schema/resume";
import { Profile } from "@/schema/profile";
import { Sections } from "@/schema/sections";
import { basicsSchema, Basics } from "@/schema/basics";
import axiosClient from "../../app/utils/axios";
import _set from "lodash.set";
import {
  getNestedKeys,
  getValueFromPath,
  NestedKeyOf,
} from "@/utils/NestedKeys";
import { TestFunction } from "../test";

interface initialStateInterface {
  resumes: Resumes[];
  resume: Resume;
}
const initialState: initialStateInterface = {
  resumes: [],
  resume: DefaultResumeData,
};

const resumiSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setResumes: (state, action) => {
      state.resumes = action.payload;
    },
    setResume: (state, action) => {
      state.resume = action.payload;
    },
    getSections: (state, action) => {},
    setSectionData: (state, action) => {
      const { id, items } = action.payload;

      const searchableKey: keyof Sections = id;

      state.resume.data.sections[searchableKey].items.push(items);
      return state;
    },
    setBasicSection: (state, action) => {
      const { path, value } = action.payload;
      state.resume.data = _set(state.resume.data, path, value);

      // TestFunction();
      return state;
    },
    setSummarySection: (state, action) => {
      const { path, value } = action.payload;
      state.resume.data = _set(state.resume.data, path, value);

      return state;
    },
  },
});

export const {
  setResume,
  setResumes,
  getSections,
  setSectionData,
  setBasicSection,
  setSummarySection,
} = resumiSlice.actions;
export const resumeReducer = resumiSlice.reducer;

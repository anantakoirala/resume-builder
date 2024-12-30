import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: "",
};

const UserSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const userReducer = UserSlice.reducer;

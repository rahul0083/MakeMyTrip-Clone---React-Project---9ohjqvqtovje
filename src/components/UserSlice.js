import { configureStore, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    data: [],
  },
  reducers: {
    loginuser: (state, action) => {
      state.user = action.payload;
    },
    logoutuser: (state) => {
      state.user = null;
    },
    setdata: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { loginuser, logoutuser, setdata } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectdata = (state) => state.user.data;

export default userSlice.reducer;

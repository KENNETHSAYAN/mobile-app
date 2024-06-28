import { createSlice } from "@reduxjs/toolkit";

export const authSlicer = createSlice({
  name: "auth",
  initialState: {
    user: {
      hasToken: false,
    },
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user.hasToken = true;
    },
  },
});

export const { loginSuccess } = authSlicer.actions;

export const setInitialAuthState = () => async (dispatch) => {
  dispatch(loginSuccess({ token }));
};

export default authSlicer.reducer;

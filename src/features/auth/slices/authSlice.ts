import { createSlice } from "@reduxjs/toolkit";
// import { postsApi } from "../../app/services/posts";
import { RootState } from "@/store/store";
import { User } from "@/store/services/userApi";

interface AuthSlice {
  user: null | User;
  isAuthenticated: boolean;
}

const initialState: AuthSlice = {
  user: null,
  isAuthenticated: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addMatcher(postsApi.endpoints.login.matchPending, (_, action) => {
  //         console.log("pending", action);
  //       })
  //       .addMatcher(postsApi.endpoints.login.matchFulfilled, (state, action) => {
  //         console.log("fulfilled", action);
  //         state.user = action.payload.user;
  //       })
  //       .addMatcher(postsApi.endpoints.login.matchRejected, (_, action) => {
  //         console.log("rejected", action);
  //       });
  //   },
});

export const { logout } = slice.actions;
export default slice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

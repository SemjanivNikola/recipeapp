import { User, userApi } from "@/store/services/userApi";
import { createSlice } from "@reduxjs/toolkit";

interface AuthSlice {
  user: null | User;
  isAuthenticated: boolean;
}

const initialState: AuthSlice = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
        state.user = action.payload.appUser;
        state.isAuthenticated = true;
      })
      .addMatcher(userApi.endpoints.login.matchRejected, (_, action) => {
        console.log("rejected", action);
      });
  },
});

export const { logout } = authSlice.actions;
// Expose auth type to main store
export default authSlice.reducer;

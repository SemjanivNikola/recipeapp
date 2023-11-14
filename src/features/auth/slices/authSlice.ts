import { User, userApi } from "@/store/services/userApi";
import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";

interface AuthSlice {
  user: null | User;
  isAuthenticated: boolean;
}

function getInitialState() {
  const authStorage = localStorage.getItem("auth");
  const auth: AuthSlice | null = authStorage ? JSON.parse(authStorage) : null;
  return (
    auth ?? {
      user: null,
      isAuthenticated: false,
    }
  );
}

const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState(),
  reducers: {
    logout: () => {
      localStorage.clear();
      return { user: null, isAuthenticated: false };
    },
    rememberMe: (state) => {
      localStorage.setItem("auth", JSON.stringify(state));
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
      state.user = action.payload.appUser;
      state.isAuthenticated = true;
    });
  },
});

export const selectUser = (state: RootState) => state.auth.user;

export const { logout, rememberMe } = authSlice.actions;
// Expose auth type to main store
export default authSlice.reducer;

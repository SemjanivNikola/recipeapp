import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";

interface ToastSlice {
  type: "success" | "rejected" | "idle";
  message: string | null;
}

const initialState: ToastSlice = {
  type: "idle",
  message: null,
};

const toastSlice = createSlice({
  name: "toast",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith("/fulfilled"),
      (state, action) => {
        state.type = "success";
        state.message = action.payload.message;
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith("/rejected"),
      (state, action) => {
        state.type = "rejected";
        state.message = action.payload.message;
      }
    );
  },
});

export const selectToast = (state: RootState) => state.toast;

// Expose auth type to main store
export default toastSlice.reducer;

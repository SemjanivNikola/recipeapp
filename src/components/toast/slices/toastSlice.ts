import { recipeApi } from "@/store/services/recipeApi";
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
  reducers: {
    reset: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    // Match just create, update and delete fulfilled endpoints
    builder.addMatcher(recipeApi.endpoints.createRecipe.matchFulfilled, (state, action) => {
      state.type = "success";
      state.message = action.payload.message;
    });
    builder.addMatcher(recipeApi.endpoints.updateRecipe.matchFulfilled, (state, action) => {
      state.type = "success";
      state.message = action.payload.message;
    });
    builder.addMatcher(recipeApi.endpoints.deleteRecipe.matchFulfilled, (state, action) => {
      state.type = "success";
      state.message = action.payload.message;
    });
    // Match all rejected
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

export const { reset } = toastSlice.actions;
// Expose auth type to main store
export default toastSlice.reducer;

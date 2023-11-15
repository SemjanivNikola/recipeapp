import toast from "@/components/toast/slices/toastSlice";
import auth from "@/features/auth/slices/authSlice";
import recipeSlice from "@/features/recipe/slices/recipeSlice";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth,
    recipeSlice,
    toast,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import auth from "@/features/auth/slices/authSlice";
import recipeSlice from "@/features/recipe/slices/recipeSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth,
    recipeSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
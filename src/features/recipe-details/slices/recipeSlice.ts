import { Recipe } from "@/store/services/recipeApi";
import { userApi } from "@/store/services/userApi";
import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";
import { storeRecipeIds } from "../recipeUtils";

interface RecipeSlice {
  recipes: Recipe[];
  recipeIds: string[];
}

function getInitialState(): RecipeSlice {
  const recipeStorage = localStorage.getItem("recipes");
  const recipeIds: string[] | null = recipeStorage ? JSON.parse(recipeStorage) : null;
  return { recipes: [], recipeIds: recipeIds ?? [] };
}

const recipeSlice = createSlice({
  name: "recipes",
  initialState: getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
      state.recipeIds = action.payload.appUser.recipeIds;
      storeRecipeIds(state.recipeIds);
    });
  },
});

export const selectRecipeIds = (state: RootState) => state.recipeSlice.recipeIds;

// export const { isRecipeOwner } = recipeSlice.actions;
// Expose auth type to main store
export default recipeSlice.reducer;

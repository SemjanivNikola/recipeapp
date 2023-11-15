import { Recipe, recipeApi } from "@/store/services/recipeApi";
import { userApi } from "@/store/services/userApi";
import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";
import { storeRecipeIds } from "../details/recipeUtils";

interface RecipeSlice {
  recipes: Recipe[];
  recipeIds: string[];
}

function getInitialState(): RecipeSlice {
  const recipeStorage = localStorage.getItem("recipes");
  const recipeIds: string[] | null = recipeStorage ? JSON.parse(recipeStorage) : null;
  return { recipes: [], recipeIds: recipeIds ?? [] };
}
/**
 * @note From **recipeIds** prop here we check if user is recipe owner
 */
const recipeSlice = createSlice({
  name: "recipes",
  initialState: getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
      state.recipeIds = action.payload.appUser.recipeIds;
      storeRecipeIds(state.recipeIds);
    });
    builder.addMatcher(recipeApi.endpoints.createRecipe.matchFulfilled, (state, action) => {
      state.recipeIds.push(action.payload.recipeId);

      // Update local storage so it's up to date with changes
      storeRecipeIds(state.recipeIds);
    });
    builder.addMatcher(recipeApi.endpoints.deleteRecipe.matchFulfilled, (state, action) => {
      const idToDel = action.meta.arg.originalArgs;
      const updatedList = state.recipeIds.filter((item) => item !== idToDel);
      state.recipeIds = updatedList;

      // Update local storage so it's up to date with changes
      storeRecipeIds(state.recipeIds);
    });
  },
});

export const selectRecipeIds = (state: RootState) => state.recipeSlice.recipeIds;

// export const { isRecipeOwner } = recipeSlice.actions;
// Expose auth type to main store
export default recipeSlice.reducer;

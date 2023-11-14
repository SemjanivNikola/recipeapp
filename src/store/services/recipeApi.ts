import env from "@/environment.config";
import { api } from "../api/api";

export interface Recipe {
  id: string;
  title: string;
  authorId: string;
  dateCreated: string;
  instructions: string[];
  tags: string[];
}

export const recipeApi = api.injectEndpoints({
  endpoints: (build) => ({
    fetchAll: build.query<Recipe[], null>({
      query: () => ({
        url: env.GET_ALL_RECIPES_URL,
        method: "GET",
      }),
      transformResponse: (response: { recipes: Recipe[] }) => response.recipes,
      providesTags: () => [{ type: "Recipe", id: "LIST" }],
    }),
    fetchById: build.query<Recipe, string>({
      query: (recipeId) => ({
        url: env.GET_RECIPE_URL,
        params: { recipeId },
        method: "GET",
      }),
      transformResponse: (response: { recipe: Recipe }) => response.recipe,
      providesTags: (result) => [{ type: "Recipe", id: result?.id }],
    }),
    createRecipe: build.mutation<{ message: string; recipeId: string }, { recipe: Omit<Recipe, "id"> }>({
      query: (body) => ({
        url: env.ADD_RECIPE_URL,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Recipe", id: "LIST" }],
    }),
    updateRecipe: build.mutation<{ message: string }, { recipeId: string; recipe: Omit<Recipe, "id"> }>({
      query: (body) => ({
        url: env.UPDATE_RECIPE_URL,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (_r, _e, arg) => [{ type: "Recipe", id: arg.recipeId }],
    }),
    deleteRecipe: build.mutation<{ message: string }, string>({
      query: (recipeId) => ({
        url: env.DELETE_RECIPE_URL,
        params: {
          recipeId,
        },
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Recipe", id: "LIST" }],
    }),
  }),
});

export const {
  useFetchAllQuery,
  useFetchByIdQuery,
  useCreateRecipeMutation,
  useUpdateRecipeMutation,
  useDeleteRecipeMutation,
} = recipeApi;

export const {
  endpoints: { fetchAll, fetchById, createRecipe, updateRecipe, deleteRecipe },
} = recipeApi;

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
    }),
    fetchById: build.query<Recipe, string>({
      query: (recipeId) => ({
        url: env.GET_RECIPE_URL,
        params: { recipeId },
        method: "GET",
      }),
    }),
    createRecipe: build.mutation<{ message: string; recipeId: string }, { recipe: Omit<Recipe, "id"> }>({
      query: (body) => ({
        url: env.ADD_RECIPE_URL,
        method: "POST",
        body,
      }),
    }),
    updateRecipe: build.mutation<{ message: string }, { recipeId: string; recipe: Omit<Recipe, "id"> }>({
      query: (body) => ({
        url: env.UPDATE_RECIPE_URL,
        method: "PATCH",
        body,
      }),
    }),
    deleteRecipe: build.mutation<{ message: string }, string>({
      query: (recipeId) => ({
        url: env.DELETE_RECIPE_URL,
        params: {
          recipeId,
        },
        method: "DELETE",
      }),
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

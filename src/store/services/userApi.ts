import env from "@/environment.config";
import { api } from "../api/api";

export interface User {
  id: string;
  name: string;
  email: string;
  recipeIds: string[];
}

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<{ message: string; appUser: User }, { email: string; password: string }>({
      query: (credentials) => ({
        url: env.LOGIN_URL,
        method: "POST",
        body: credentials,
      }),
    }),
    register: build.mutation<{ message: string; appUserId: string }, { name: string; email: string; password: string }>(
      {
        query: (body) => ({
          url: env.REGISTER_URL,
          method: "POST",
          body,
        }),
      }
    ),
  }),
});

export const { useLoginMutation, useRegisterMutation } = userApi;

export const {
  endpoints: { login, register },
} = userApi;

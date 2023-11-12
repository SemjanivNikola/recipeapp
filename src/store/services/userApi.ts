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
    login: build.mutation<{ user: User }, any>({
      query: (credentials: any) => ({
        url: env.LOGIN_URL,
        method: "POST",
        body: credentials,
      }),
    }),
    register: build.mutation<{}, any>({
      query: (body: any) => ({
        url: env.REGISTER_URL,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = userApi;

export const {
  endpoints: { login, register },
} = userApi;

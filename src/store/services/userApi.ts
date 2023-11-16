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
    register: build.mutation<
      { message: string; appUserId: string },
      { fullName: string; email: string; password: string }
    >({
      query: (body) => ({
        url: env.REGISTER_URL,
        method: "POST",
        body,
      }),
    }),
    userDetails: build.query<User, string>({
      query: (userId) => ({
        url: env.GET_USER_URL,
        method: "GET",
        params: { appUserId: userId },
      }),
      transformResponse: (response: { appUser: User }) => response.appUser,
      providesTags: (result) => [{ type: "User", id: result?.id }],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useUserDetailsQuery } = userApi;

export const {
  endpoints: { login, register, userDetails },
} = userApi;

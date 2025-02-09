"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginBodyDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
    roles: any;
  };
}

export interface SignupBodyDto {
  username: string;
  password: string;
  email: string;
  roles: any;
}

export interface SignupResponseDto {
  id: string;
  username: string;
  email: string;
  roles: string;
}

export enum RoleEnum {
  TALENT = "talent",
  ADMIN = "admin",
}

interface AuthState {
  token: string | null;
  user: {
    id: string;
    username: string;
    email: string;
    roles: any;
  } | null;
}

const loadAuthState = (): AuthState => {
  // if (typeof window === "undefined") {
  //   return { token: null, user: null };
  // }
  return {
    token: null,
    user: null,
  };
};

const initialState: AuthState = loadAuthState();
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<LoginResponseDto>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    clearCredentials: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/auth" }),
  endpoints: (builder) => ({
    login: builder.mutation<any, LoginBodyDto>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation<any, SignupBodyDto>({
      query: (userData) => ({
        url: "/signup",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
export const { useLoginMutation, useSignupMutation } = authApi;

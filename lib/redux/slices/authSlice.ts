"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types for login, signup, and user response
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

// Define the AuthState type
interface AuthState {
  token: string | null;
  user: {
    id: string;
    username: string;
    email: string;
    roles: any;
  } | null;
}

// Utility function to load auth data from localStorage (only runs on client)
const loadAuthState = (): AuthState => {
  if (typeof window === "undefined") {
    return { token: null, user: null }; // Default if server-side rendering
  }

  const storedToken = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  return {
    token: storedToken || null,
    user: storedUser ? JSON.parse(storedUser) : null,
  };
};

// Set initial state using loadAuthState
const initialState: AuthState = loadAuthState();

// Redux slice to handle authentication state
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<LoginResponseDto>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      // Save token and user to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      }
    },
    clearCredentials: (state) => {
      state.token = null;
      state.user = null;
      // Remove token and user from localStorage
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    },
  },
});

// Create API slice for authentication
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

// Export actions and reducer
export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;

// Export hooks for login/signup mutations
export const { useLoginMutation, useSignupMutation } = authApi;

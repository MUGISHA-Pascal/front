import { configureStore } from "@reduxjs/toolkit";
import { challengeSlice } from "@/lib/redux/slices/challengeSlice";
import { authApi } from "@/lib/redux/slices/authSlice";
import authReducer  from "@/lib/redux/slices/authSlice";

export const store = configureStore({
  reducer: {
    [challengeSlice.reducerPath]: challengeSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer, // Add the auth reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(challengeSlice.middleware)
      .concat(authApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

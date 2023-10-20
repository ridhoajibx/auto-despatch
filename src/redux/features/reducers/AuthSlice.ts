// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '@/redux/store'; // Define AppThunk if you're using middleware for async actions

// here we are typing the types for the state
export type AuthState = {
  data: any;
  accessToken?: string;
    refreshToken?: string;
  isLogin: boolean;
  pending: boolean;
  error: boolean;
  message: any;
};

const initialState: AuthState = {
  data: {},
  accessToken: "",
  refreshToken: "",
  isLogin: false,
  pending: false,
  error: false,
  message: "",
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLogin = true;
      state.accessToken = action?.payload?.accessToken;
      state.refreshToken = action?.payload?.refreshToken;
    },
    logout: (state) => {
      state.isLogin = false;
      state.accessToken = null;
      state.refreshToken = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.pending = action.payload;
    },
    setError: (state, action: PayloadAction<boolean | null>) => {
      state.error = action.payload;
    },
    setMessage: (state, action: PayloadAction<string | null>) => {
      state.message = action.payload;
    },
  },
});

export const { loginSuccess, logout, setLoading, setError, setMessage } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;

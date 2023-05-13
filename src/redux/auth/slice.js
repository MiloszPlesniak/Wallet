import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logOutUser,
  refreshUser,
  fetchCurrentUser,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.pending](state) {
      state.isLoading = true;
    },
    [registerUser.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = {};
    },
    [registerUser.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },
    [loginUser.pending](state) {
      state.isLoading = true;
    },
    [loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = {};
      state.isLoading = false;
    },
    [loginUser.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },
    [logOutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = {};
      state.isLoading = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isLoading = true;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoading = false;
    },
    [fetchCurrentUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;

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
  error: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = {};
    },
    [registerUser.rejected](state, { payload }) {
      state.error = payload;
    },
    [loginUser.pending](state) {
      state.isLoading = true;
    },
    [loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = {};
    },
    [loginUser.rejected](state, { payload }) {
      state.error = payload;
    },
    [logOutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = {};
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

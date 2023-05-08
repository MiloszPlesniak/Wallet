import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { Navigate } from 'react-router-dom';
import { registerUser, loginUser, logOutUser, refreshUser } from './operations';

const initialState = {
  user: { firstName: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      //console.log(action.payload);
      // console.log(action.payload.user);
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
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
  },
});
/*[registerUser.fulfilled](state, { payload }) {},
    [registerUser.pending](state, { payload }) {},
    [registerUser.rejected](state, { payload }) {},
    [loginUser.fulfilled](state, { payload }) {},
    [loginUser.pending](state, { payload }) {},
    [loginUser.rejected](state, { payload }) {},
    [logOutUser.fulfilled](state, { payload }) {},
    [logOutUser.pending](state, { payload }) {},
    [logOutUser.rejected](state, { payload }) {},
    [refreshUser.fulfilled](state, { payload }) {},
    [refreshUser.pending](state, { payload }) {},
    [refreshUser.rejected](state, { payload }) {},*/

export default authSlice.reducer;

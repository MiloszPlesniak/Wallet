import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { Navigate } from 'react-router-dom';
import { registerUser, loginUser, logOutUser, refreshUser } from './thunk';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: true,
  isRefreshing: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, { payload }) {},
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
    [refreshUser.rejected](state, { payload }) {},
  },
});
export default authSlice.reducer;

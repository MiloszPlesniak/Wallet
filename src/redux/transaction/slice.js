import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
import {
  fetchTransactions,
  addTransactions,
  editTransactions,
  deleteTransactions,
} from './thunk';

export const financesSlice = createSlice({
  name: 'transaction',
  initialState: {
    transactions: [],
    balance: 0,
  },
  reducers: {
    setBalance: (state, { payload }) => {
      state.balance = payload;
    },
  },
  extraReducers: {
    [fetchTransactions.fulfilled](state, { payload }) {},
    [fetchTransactions.pending](state, { payload }) {},
    [fetchTransactions.rejected](state, { payload }) {},
    [addTransactions.fulfilled](state, { payload }) {},
    [addTransactions.pending](state, { payload }) {},
    [addTransactions.rejected](state, { payload }) {},
    [editTransactions.fulfilled](state, { payload }) {},
    [editTransactions.pending](state, { payload }) {},
    [editTransactions.rejected](state, { payload }) {},
    [deleteTransactions.fulfilled](state, { payload }) {},
    [deleteTransactions.pending](state, { payload }) {},
    [deleteTransactions.rejected](state, { payload }) {},
  },
});

export const { setBalance } = financesSlice.actions;
export default financesSlice.reducer;

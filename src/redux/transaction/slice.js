import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTransactions,
  addTransactions,
  editTransactions,
  deleteTransactions,
  fetchTransacionsOfPeriot,
  fetchTransactionsCategories,
} from './thunk';

const initialState = {
  error: null,
  isLoading: false,
  transactions: [],
  balance: 0,
  transactionsCategories: [],
  selectedTransaction: {},
};

export const financesSlice = createSlice({
  name: 'finances',
  initialState,
  reducers: {
    setBalance: (state, { payload }) => {
      state.balance = payload;
    },
    setSelectedTransaction: (state, { payload }) => {
      state.selectedTransaction = payload;
    },
  },
  extraReducers: {
    [fetchTransactions.pending](state) {
      state.isLoading = true;
    },
    [fetchTransactions.fulfilled](state, { payload }) {
      state.transactions = payload;
      state.isLoading = false;
    },
    [fetchTransactions.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    // /////////////////////
    [addTransactions.pending](state) {
      state.isLoading = true;
    },
    [addTransactions.fulfilled](state, { payload }) {
      console.log('payload from addTransaction:', payload);
      state.transactions.push(payload);
      state.isLoading = false;
    },
    [addTransactions.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    // /////////////////////////////
    [editTransactions.pending](state) {
      state.isLoading = true;
    },
    [editTransactions.fulfilled](state, { payload }) {
      console.log('payload from edit:', payload.data);
      const index = state.transactions.findIndex(
        item => item.id === payload.data.id
      );
      console.log('index from edit thunk:', index);
      const editEditransacions = state.transactions;
      editEditransacions.splice(index, 1, payload.data);
      state.transactions = editEditransacions;
    },
    [editTransactions.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    // ////////////////////////////////////
    [deleteTransactions.pending]: state => {
      state.isLoading = true;
    },
    [deleteTransactions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;

      // const editEditransacions = state.transactions;
      // const index = editEditransacions.findIndex(
      //   item => item._id === payload._id
      // );
      // editEditransacions.splice(index, 1);
      // state.transactions = editEditransacions;

      console.log('payload from slice', action);

      const index = state.transactions.findIndex(
        transaction => transaction.id === action.payload.id
      );
      state.transactions.splice(index, 1);
    },
    [deleteTransactions.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
  // ///////////////////////////

  [fetchTransacionsOfPeriot.pending](state) {
    state.isLoading = true;
  },
  [fetchTransacionsOfPeriot.fulfilled](state) {
    state.isLoading = false;
  },
  [fetchTransacionsOfPeriot.rejected](state, { payload }) {
    state.isLoading = false;
    state.error = payload;
  },

  /////////////////////////
  [fetchTransactionsCategories.pending]: state => {
    state.isLoading = true;
  },
  [fetchTransactionsCategories.fulfilled]: (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.transactionsCategories = action.payload.data;
  },
  [fetchTransactionsCategories.rejected]: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  ////////////
});

export const { setBalance, setSelectedTransaction } = financesSlice.actions;
export default financesSlice.reducer;

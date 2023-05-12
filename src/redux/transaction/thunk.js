import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTransactions = createAsyncThunk(
  'finances/fetchTransactions',
  async () => {
    const res = await axios.get('https://wallet.goit.ua/api/transactions');
    return res.data;
  }
);
export const addTransactions = createAsyncThunk(
  'finances/addTransactions',
  async data => {
    const res = await axios.post(
      'https://wallet.goit.ua/api/transactions',
      data
    );
    return res.data;
  }
);
export const editTransactions = createAsyncThunk(
  'finances/editTransactions',
  async data => {
    console.log('data from thunk:', data);

    const id = data.id;
    const res = await axios.patch(
      `https://wallet.goit.ua/api/transactions/${id}`,
      data.data
    );
    return res;
  }
);
export const deleteTransactions = createAsyncThunk(
  'finances/deleteTransactions',
  async transactionId => {
    try {
      const res = await axios.delete(
        `https://wallet.goit.ua/api/transactions/${transactionId}`
      );
      return res.data;
    } catch (error) {
      return console.error(error.message);
    }
  }
);
export const fetchTransacionsOfPeriot = createAsyncThunk(
  'finances/fetchTransactionsOfPeriot',

  async data => {
    const res = await axios.get(
      'https://wallet-rest-api.herokuapp.com/api/transactions/periodicTransactions',
      data
    );

    return res.data;
  }
);

export const fetchTransactionsCategories = createAsyncThunk(
  'finances/fetchTransactionsCategories',

  async thunkAPI => {
    try {
      const res = await axios.get(
        'https://wallet.goit.ua/api/transaction-categories'
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

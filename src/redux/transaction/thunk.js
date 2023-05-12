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
  async (id, data) => {
    const res = await axios.patch(
      `https://wallet.goit.ua/api/transactions${id}`,
      data
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
      // return thunkAPI.rejectWithValue(error.message);
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

  async (data, thunkAPI) => {
    console.log(data);
    try {
      const res = await axios.get(
        `https://wallet.goit.ua/api/transactions-summary?month=${data.month}&year=${data.year}`
      );
      console.log(res);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

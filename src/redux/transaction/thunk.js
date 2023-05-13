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

  async ({ month, year }) => {
    try {
      const { data } = await axios.get(
        `https://wallet.goit.ua/api/transactions-summary?month=${month}&year=${year}`
      );
      return data;
    } catch (error) {
      //return rejectWithValue(error.message);
    }
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
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

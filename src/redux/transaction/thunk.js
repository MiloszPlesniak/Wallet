import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTransactions = createAsyncThunk(
  'finances/fetchTransactions',
  async () => {
    const res = await axios.get(
      'https://wallet-rest-api.herokuapp.com/api/transactions'
    );
    return res;
  }
);
export const addTransactions = createAsyncThunk(
  'finances/addTransactions',
  async data => {
    const res = await axios.post(
      'https://wallet-rest-api.herokuapp.com/api/transactions',
      data
    );
    return res;
  }
);
export const editTransactions = createAsyncThunk(
  'finances/editTransactions',
  async data => {
    const res = await axios.patch(
      'https://wallet-rest-api.herokuapp.com/api/transactions',
      data
    );
    return res;
  }
);
export const deleteTransactions = createAsyncThunk(
  'finances/deleteTransactions',
  async id => {
    const res = await axios.delete(
      'https://wallet-rest-api.herokuapp.com/api/transactions',
      id
    );
    return res;
  }
);
export const fetchTransacionsOfPeriot = createAsyncThunk(
  'finances/fetchTransactionsOfPeriot',
  
  async (id, data) => {
    const res = axios.get(
      'https://wallet-rest-api.herokuapp.com/api/transactions', id, data

    );
    return res;
  }
);

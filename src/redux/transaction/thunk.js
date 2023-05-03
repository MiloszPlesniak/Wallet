import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = '';
export const fetchTransactions = createAsyncThunk(
  'transactions/fetch',
  async (data,time) => {}
);
export const addTransactions = createAsyncThunk(
  'transactions/add',
  async data => {}
);
export const editTransactions = createAsyncThunk(
  'transactions/edit',
  async data => {}
);
export const deleteTransactions = createAsyncThunk(
  'transactions/delete',
  async id => {}
);


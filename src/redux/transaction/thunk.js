import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = '';
export const fetchTransactions = createAsyncThunk(
  'finances/fetchTransactions',
  async (data, time) => {}
);
export const addTransactions = createAsyncThunk(
  'finances/addTransactions',
  async data => {}
);
export const editTransactions = createAsyncThunk(
  'finances/editTransactions',
  async data => {}
);
export const deleteTransactions = createAsyncThunk(
  'finances/deleteTransactions',
  async id => {}
);

